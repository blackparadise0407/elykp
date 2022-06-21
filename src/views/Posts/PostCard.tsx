import dayjs from 'dayjs'
import { memo } from 'react'
import { AiOutlineEye, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BsDot } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import { getMinRead } from 'shared/helper'

interface PostCardProps {
    data: IPost
}

export default memo(function PostCard({ data }: PostCardProps) {
    const { slug, title, content, views, upvotes, createdAt } = data
    const minRead = getMinRead(content)

    return (
        <div className="p-5 space-y-2">
            <Link to={`/${slug}`}>
                <h1 className="font-semibold text-3xl line-clamp-2">{title}</h1>
            </Link>
            <div className="flex gap-2 items-center text-sm text-gray-400">
                <span>{dayjs(createdAt).format('MMM DD, YYYY')}</span>
                <BsDot />
                <span className="text-blue-500">{minRead} min read</span>
            </div>
            <p className="line-clamp-2">{content}</p>
            <Link className="inline-block underline" to={`/${slug}`}>
                Read more
            </Link>
            <div className="flex gap-5">
                <div className="flex items-center gap-2">
                    <AiOutlineEye className="text-gray-400 text-xl" />
                    <span>{views}</span>
                </div>
                <div className="flex items-center gap-2">
                    {Math.random() > 0.5 ? (
                        <AiOutlineHeart className="text-gray-400 text-xl" />
                    ) : (
                        <AiFillHeart className="text-red-500 text-xl" />
                    )}
                    <span>{upvotes}</span>
                </div>
            </div>
        </div>
    )
})
