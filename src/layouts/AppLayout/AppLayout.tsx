import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from 'components'

export default function AppLayout() {
    return (
        <Fragment>
            <Header />
            <main className="container mx-auto">
                <Outlet />
            </main>
        </Fragment>
    )
}
