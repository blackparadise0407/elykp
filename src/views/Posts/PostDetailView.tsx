import dayjs from 'dayjs'
import { useEffect, useRef, useState } from 'react'
import { BsDot } from 'react-icons/bs'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'
import slugify from 'slugify'

import { cache } from 'apollo/client'
import { Skeleton } from 'components'
import { TableOfContent } from 'components/TableOfContent'
import { useHeadingData } from 'hooks/useHeadingData'
import { useIntersectionObserver } from 'hooks/useIntersectionObserver'
import { getMinRead } from 'shared/helper'

import { usePostLazyQuery, useUpdatePostViewMutation } from './hooks'
import SkeletonPost from './SkeletonPost'

export default function PostDetailView() {
    const { slug } = useParams<{ slug: string }>()
    const [activeId, setActiveId] = useState('')
    const [postLazy, { data, loading }] = usePostLazyQuery()
    const [updatePostView] = useUpdatePostViewMutation()

    const ref = useRef<HTMLDivElement>(null)

    const headings = useHeadingData(ref, [data?.post])

    useIntersectionObserver(ref, setActiveId)

    useEffect(() => {
        document.documentElement.scrollTo(0, 0)

        const timeout = setTimeout(() => {
            // Fire page view event after 5s
            console.log('Viewed')
        }, 5000)

        async function eff() {
            if (slug) {
                const { data } = await postLazy({ variables: { slug } })
                if (data?.post) {
                    await updatePostView({
                        variables: {
                            id: data.post.id,
                            views: data.post.views + 1,
                        },
                    })
                    console.log(cache)
                }
            }
        }
        eff()

        return () => {
            clearTimeout(timeout)
        }
    }, [slug])

    const minRead = getMinRead(data?.post?.content)

    return (
        <div className="flex justify-center gap-10 app-container my-5">
            {loading ? (
                <SkeletonPost />
            ) : (
                <>
                    {data?.post && (
                        <article className="max-w-[770px] flex-grow">
                            <h1 className="text-center font-bold text-4xl">
                                {data.post.title}
                            </h1>
                            <div className="mt-2 flex items-center justify-center text-gray-400">
                                {dayjs(data.post.createdAt).format(
                                    'MMM DD, YYYY'
                                )}
                                <BsDot />
                                <span>{minRead} min read</span>
                            </div>
                            <div ref={ref}>
                                <ReactMarkdown
                                    components={{
                                        h1: ({ node: _, ...rest }) => (
                                            <h1
                                                className="scroll-mt-10 font-bold text-2xl"
                                                id={`${slugify(
                                                    rest.children.toString(),
                                                    {
                                                        replacement: '_',
                                                        lower: true,
                                                        strict: true,
                                                    }
                                                )}`}
                                                {...rest}
                                            />
                                        ),
                                        p: ({ node: _, ...rest }) => (
                                            <p {...rest} />
                                        ),
                                        code: ({
                                            node: _,
                                            inline,
                                            className,
                                            children,
                                            ...props
                                        }) => {
                                            const match = /language-(\w+)/.exec(
                                                className || ''
                                            )
                                            return !inline && match ? (
                                                <SyntaxHighlighter
                                                    children={String(
                                                        children
                                                    ).replace(/\n$/, '')}
                                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                                    // @ts-ignore
                                                    style={okaidia}
                                                    language={match[1]}
                                                    PreTag="div"
                                                    {...props}
                                                />
                                            ) : (
                                                <code
                                                    className={className}
                                                    {...props}
                                                >
                                                    {children}
                                                </code>
                                            )
                                        },
                                    }}
                                    className="mt-10 space-y-2 tracking-wider leading-relaxed"
                                    remarkPlugins={[remarkGfm]}
                                >
                                    {data.post.content}
                                </ReactMarkdown>
                            </div>
                        </article>
                    )}
                </>
            )}
            {loading ? (
                <div className="min-w-[180px] max-w-[300px] space-y-2">
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            ) : (
                <TableOfContent headings={headings} activeId={activeId} />
            )}
        </div>
    )
}
