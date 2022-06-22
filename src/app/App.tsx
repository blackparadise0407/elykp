import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import { UnderConstruction } from 'components'
import { AppLayout } from 'layouts/AppLayout'

const PostDetailView = lazy(() => import('views/Posts/PostDetailView'))
const PostsView = lazy(() => import('views/Posts/PostsView'))
const AboutView = lazy(() => import('views/About/AboutView'))

export default function App() {
    return (
        <Routes>
            <Route path="" element={<AppLayout />}>
                <Route index element={<PostsView />} />
                <Route path="about" element={<AboutView />} />
                <Route path="contact" element={<UnderConstruction />} />
                <Route path=":slug" element={<PostDetailView />} />
            </Route>
        </Routes>
    )
}
