import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AppLayout } from 'layouts/AppLayout'
import { PostsView } from 'views/Posts'

const PostDetailView = lazy(() => import('views/Posts/PostDetailView'))

export default function App() {
    return (
        <Routes>
            <Route path="" element={<AppLayout />}>
                <Route index element={<PostsView />} />
                <Route path="about" element={<>About</>} />
                <Route path="contact" element={<>Contact</>} />
                <Route path=":slug" element={<PostDetailView />} />
            </Route>
        </Routes>
    )
}
