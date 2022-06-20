import { motion } from 'framer-motion'
import { memo } from 'react'

import PostCard from './PostCard'

interface PostListProps {
    posts: IPost[]
}

export default memo(function PostList({ posts }: PostListProps) {
    return (
        <motion.div layout className="mx-auto max-w-[770px] space-y-10">
            {posts.map((post, idx) => (
                <motion.div
                    id={post.id}
                    key={post.id}
                    initial={{ opacity: 0, x: -idx * 200 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <PostCard data={post} />
                </motion.div>
            ))}
        </motion.div>
    )
})
