import { Route, Routes } from 'react-router-dom'

import { AppLayout } from 'layouts/AppLayout'

export default function App() {
    return (
        <Routes>
            <Route path="" element={<AppLayout />}>
                <Route index element={<>Posts</>} />
                <Route path="about" element={<>About</>} />
                <Route path="contact" element={<>Contact</>} />
            </Route>
        </Routes>
    )
}
