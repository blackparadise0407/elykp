import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

import { Header, LinearProgress } from 'components'
import { useStore } from 'store/store'

export default function AppLayout() {
    const loading = useStore((state) => state.loading)

    return (
        <Fragment>
            {loading && <LinearProgress className="fixed top-0 left-0 z-50" />}
            <Header />
            <main>
                <Outlet />
            </main>
        </Fragment>
    )
}
