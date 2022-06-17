import { memo } from 'react'

import PostCard from './PostCard'

interface PostListProps {
    posts: IPost[]
}

export default memo(function PostList({ posts }: PostListProps) {
    if (!posts.length) return null

    return (
        <div className="mx-auto max-w-[770px] space-y-10">
            {posts.map((post) => (
                <PostCard key={post.id} data={post} />
            ))}
        </div>
    )
})
