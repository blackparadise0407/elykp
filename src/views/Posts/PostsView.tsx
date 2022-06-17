import { useEffect } from 'react'

import { getPosts } from 'apis/endpoints/posts'
import { useStore } from 'store/store'

import PostList from './PostList'

export default function PostsView() {
    const posts = useStore((state) => state.posts)
    const updatePosts = useStore((state) => state.updatePosts)

    useEffect(() => {
        async function fetchPosts() {
            try {
                const data = await getPosts()
                updatePosts(data)
            } catch (e) {}
        }
        typeof posts === 'undefined' && fetchPosts()
    }, [posts])

    return (
        <div>
            <PostList posts={posts ?? []} />
        </div>
    )
}
