import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { useWindowSize } from 'hooks/useWindowSize'

const links = [
    {
        to: '/',
        label: 'Posts',
    },
    {
        to: '/about',
        label: 'About me',
    },
    {
        to: '/contact',
        label: 'Contact',
    },
]

export default function Header() {
    const [offsetLeft, setOffsetLeft] = useState(0)
    const { pathname } = useLocation()
    const [w] = useWindowSize()

    useEffect(() => {
        const ele = document.getElementById(pathname)
        setOffsetLeft(ele?.offsetLeft ?? 0)
    }, [pathname, w])

    return (
        <header className="relative h-[88px] bg-white shadow">
            <div className="app-container mx-auto h-full flex items-center">
                <h1 className="font-bold">ElykP</h1>
                <div className="flex-grow"></div>
                <div className="hidden md:flex items-center gap-5 self-stretch">
                    {links.map(({ to, label }, idx) => (
                        <NavLink
                            id={to}
                            key={idx}
                            to={to}
                            className={({ isActive }) =>
                                clsx(
                                    'w-[100px] text-center',
                                    isActive &&
                                        'text-blue-500 pointer-events-none'
                                )
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </div>
                <div className="flex-grow"></div>
                <div>Theme</div>
            </div>
            {!!offsetLeft && (
                <div
                    className="absolute bottom-0 w-[100px] h-[4px] rounded-t bg-blue-500 transition-transform will-change-transform"
                    style={{
                        transform: `translateX(${offsetLeft}px)`,
                    }}
                ></div>
            )}
        </header>
    )
}
