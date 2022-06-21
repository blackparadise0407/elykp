import { usePostsQuery } from './hooks'
import PostList from './PostList'

export default function PostsView() {
    const { data } = usePostsQuery()

    return (
        <div className="app-container my-5">
            {!!data?.posts.length && <PostList posts={data.posts} />}
        </div>
    )
}
