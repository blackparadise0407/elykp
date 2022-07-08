import clsx from 'clsx'
import { memo, useEffect, useId } from 'react'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'

import { useLocalStorage } from 'hooks/useLocalStorage'

const THEME_KEY = 'elykp_theme'
type TTheme = 'light' | 'dark'

export default memo(function ThemeToggle() {
    const [theme, setTheme] = useLocalStorage<TTheme>(THEME_KEY, 'light')
    const checkboxId = useId()

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const handleChangeTheme = () => {
        const nextTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(nextTheme)
    }

    return (
        <div>
            <input
                hidden
                id={checkboxId}
                type="checkbox"
                onClick={handleChangeTheme}
            ></input>
            <label
                className={clsx(
                    'w-[45px] flex items-center relative rounded-full p-1 shadow-inner transition-colors cursor-pointer',
                    theme === 'dark' ? 'bg-cyan-900' : 'bg-sky-400'
                )}
                htmlFor={checkboxId}
            >
                <BsMoonFill className="text-white" />
                <div className="flex-grow"></div>
                <BsSunFill className="text-yellow-200" />
                <div
                    className={clsx(
                        'absolute left-0 w-5 h-5 rounded-full top-1/2 -translate-y-1/2 bg-white shadow translate-x-[2px] transition-transform will-change-transform',
                        theme === 'dark' && 'translate-x-[calc(100%+3px)]'
                    )}
                ></div>
            </label>
        </div>
    )
})
