import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AppLayout } from 'layouts/AppLayout'

const PostDetailView = lazy(() => import('views/Posts/PostDetailView'))
const PostsView = lazy(() => import('views/Posts/PostsView'))
const AboutView = lazy(() => import('views/About/AboutView'))
const UnderConstruction = lazy(
    () => import('components/UnderConstruction/UnderConstruction')
)

export default function App() {
    return (
        <Routes>
            <Route path="" element={<AppLayout />}>
                <Route index element={<PostsView />} />
                <Route path="about" element={<AboutView />} />
                <Route path="projects" element={<UnderConstruction />} />
                <Route path=":slug" element={<PostDetailView />} />
            </Route>
        </Routes>
    )
}
