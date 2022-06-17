import dayjs from 'dayjs'
import { memo } from 'react'
import { BsDot } from 'react-icons/bs'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import remarkGfm from 'remark-gfm'
interface PostCardProps {
    data: IPost
}

export default memo(function PostCard({ data }: PostCardProps) {
    const { id, title, content, createdAt } = data

    const minsRead = Math.ceil(content.split(' ').length / 100)

    return (
        <div className="p-5 space-y-2">
            <Link to={`/${id}`}>
                <h2 className="font-semibold">{title}</h2>
            </Link>
            <div className="flex gap-2 items-center text-sm text-gray-400">
                <span>{dayjs(createdAt).format('MMM DD, YYYY')}</span>
                <BsDot />
                <span className="text-blue-500">
                    {minsRead} {minsRead > 1 ? 'mins' : 'min'} read
                </span>
            </div>
            <ReactMarkdown className="line-clamp-2" remarkPlugins={[remarkGfm]}>
                {content}
            </ReactMarkdown>
            <Link className="inline-block underline" to={`/${id}`}>
                Read more
            </Link>
        </div>
    )
})
