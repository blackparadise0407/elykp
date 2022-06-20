import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

import { getPosts } from 'apis/endpoints/posts'
import { AnimatedView } from 'components'
import { useStore } from 'store/store'

import PostList from './PostList'

export default function PostsView() {
    const posts = useStore((state) => state.posts)
    const updatePosts = useStore((state) => state.updatePosts)
    const updateLoading = useStore((state) => state.updateLoading)

    useEffect(() => {
        async function fetchPosts() {
            updateLoading(true)
            try {
                const { posts, total } = await getPosts()
                updatePosts(posts)
            } catch (e) {
            } finally {
                updateLoading(false)
            }
        }
        typeof posts === 'undefined' && fetchPosts()
    }, [posts])

    return (
        <AnimatedView>
            <div className="h-[calc(100vh-88px)] overflow-y-auto">
                <AnimatePresence initial={false}>
                    {!!posts?.length && <PostList posts={posts} />}
                </AnimatePresence>
            </div>
        </AnimatedView>
    )
}
