import dayjs from 'dayjs'
import { useEffect, useRef, useState } from 'react'
import { BsDot } from 'react-icons/bs'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import remarkGfm from 'remark-gfm'
import slugify from 'slugify'

import { getPostBySlug } from 'apis/endpoints/posts'
import { TableOfContent } from 'components/TableOfContent'
import { useHeadingData } from 'hooks/useHeadingData'
import { useIntersectionObserver } from 'hooks/useIntersectionObserver'
import { getMinRead } from 'shared/helper'
import { useStore } from 'store/store'

const cachedPost: { [slug: string]: IPost } = {}

export default function PostDetailView() {
    const { slug } = useParams<{ slug: string }>()
    const [activeId, setActiveId] = useState('')
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

    if (!post) return null

    const { title, content, createdAt } = post

    const minRead = getMinRead(content)

    return (
        <div className="flex justify-center gap-10">
            <article className="max-w-[770px] flex-grow">
                <h1 className="text-center font-bold text-4xl">{title}</h1>
                <div className="mt-2 flex items-center justify-center text-gray-400">
                    {dayjs(createdAt).format('MMM DD, YYYY')}
                    <BsDot />
                    <span>{minRead} min read</span>
                </div>
                <div ref={ref}>
                    <ReactMarkdown
                        components={{
                            h1: ({ node: _, ...rest }) => (
                                <h1
                                    className="scroll-mt-10"
                                    id={`${slugify(rest.children.toString(), {
                                        replacement: '_',
                                        lower: true,
                                        strict: true,
                                    })}`}
                                    {...rest}
                                />
                            ),
                        }}
                        className="mt-10 tracking-wide leading-relaxed"
                        remarkPlugins={[remarkGfm]}
                    >
                        {content}
                    </ReactMarkdown>
                </div>
            </article>
            <TableOfContent headings={headings} activeId={activeId} />
        </div>
    )
}
