import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import remarkGfm from 'remark-gfm'

import { getPostBySlug } from 'apis/endpoints/posts'

const cachedPost: { [slug: string]: IPost } = {}

export default function PostDetailView() {
    const { slug } = useParams<{ slug: string }>()
    const [post, setPost] = useState<IPost | undefined>(() => {
        if (!slug) return undefined
        return cachedPost[slug]
    })

    useEffect(() => {
        async function fetchPost() {
            if (!slug) return
            try {
                const post = await getPostBySlug(slug)
                cachedPost[slug] = post
                setPost(post)
            } catch (e) {}
        }

        if (slug && cachedPost[slug]) {
            setPost(cachedPost[slug])
        } else fetchPost()
    }, [slug])

    if (!post) return null

    const { title, content, createdAt } = post

    return (
        <article className="max-w-[770px] mx-auto">
            <h1 className="text-center font-bold text-4xl">{title}</h1>
            <div className="mt-2 text-center text-gray-400">
                {dayjs(createdAt).format('MMM DD, YYYY')}
            </div>
            <ReactMarkdown
                className="mt-10 tracking-wide leading-relaxed"
                remarkPlugins={[remarkGfm]}
            >
                {content}
            </ReactMarkdown>
        </article>
    )
}
