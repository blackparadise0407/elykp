import dayjs from 'dayjs'
import { memo } from 'react'
import { Link } from 'react-router-dom'

interface PostCardProps {
    data: IPost
}

export default memo(function PostCard({ data }: PostCardProps) {
    const { title, slug, content, createdAt } = data

    const minsRead = Math.round(content.split(' ').length / 100)

    return (
        <div className="p-5 space-y-2">
            <Link to={`/${slug}`}>
                <h2 className="font-semibold">{title}</h2>
            </Link>
            <div className="flex gap-2 text-sm text-gray-400">
                <span>{dayjs(createdAt).format('MMM DD, YYYY')}</span>-
                <span>
                    {minsRead} {minsRead > 1 ? 'Mins' : 'Min'} read
                </span>
            </div>
            <p className="line-clamp-2">{content}</p>
            <Link className="underline" to={`/${slug}`}>
                Read more
            </Link>
        </div>
    )
})
