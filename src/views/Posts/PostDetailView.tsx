import dayjs from 'dayjs'
import { useEffect, useRef, useState } from 'react'
import { BsDot } from 'react-icons/bs'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'
import slugify from 'slugify'

import { getPostBySlug } from 'apis/endpoints/posts'
import { Skeleton } from 'components'
import { TableOfContent } from 'components/TableOfContent'
import { useHeadingData } from 'hooks/useHeadingData'
import { useIntersectionObserver } from 'hooks/useIntersectionObserver'
import { getMinRead } from 'shared/helper'
import { useStore } from 'store/store'

import SkeletonPost from './SkeletonPost'

const cachedPost: { [slug: string]: IPost } = {}

export default function PostDetailView() {
    const { slug } = useParams<{ slug: string }>()
    const [activeId, setActiveId] = useState('')
    const loading = useStore((state) => state.loading)
    const updateLoading = useStore((state) => state.updateLoading)
    const [post, setPost] = useState<IPost | undefined>(() => {
        if (!slug) return undefined
        return cachedPost[slug]
    })
    const ref = useRef<HTMLDivElement>(null)

    const headings = useHeadingData(ref, [post])

    useIntersectionObserver(ref, setActiveId)

    useEffect(() => {
        document.documentElement.scrollTo(0, 0)

        const timeout = setTimeout(() => {
            // Fire page view event after 5s
            console.log('Viewed')
        }, 5000)

        async function fetchPost() {
            updateLoading(true)
            if (!slug) return
            try {
                const post = await getPostBySlug(slug)
                cachedPost[slug] = post
                setPost(post)
            } catch (e) {
            } finally {
                updateLoading(false)
            }
        }

        if (slug && cachedPost[slug]) {
            setPost(cachedPost[slug])
        } else fetchPost()

        return () => {
            clearTimeout(timeout)
        }
    }, [slug])

    const minRead = getMinRead(post?.content)

    return (
        <div className="flex justify-center gap-10 app-container my-5">
            {loading ? (
                <SkeletonPost />
            ) : (
                <>
                    {post && (
                        <article className="max-w-[770px] flex-grow">
                            <h1 className="text-center font-bold text-4xl">
                                {post.title}
                            </h1>
                            <div className="mt-2 flex items-center justify-center text-gray-400">
                                {dayjs(post.createdAt).format('MMM DD, YYYY')}
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
                                    {post.content}
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
