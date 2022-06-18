import { useEffect } from 'react'

import { getPosts } from 'apis/endpoints/posts'
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
                const data = await getPosts()
                updatePosts(data)
            } catch (e) {
            } finally {
                updateLoading(false)
            }
        }
        typeof posts === 'undefined' && fetchPosts()
    }, [posts])

    return (
        <div className="app-container my-5">
            <PostList posts={posts ?? []} />
        </div>
    )
}
