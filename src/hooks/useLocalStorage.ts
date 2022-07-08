import { useState } from 'react'

export function useLocalStorage<T>(
    key: string,
    initialValue: T | undefined = undefined
) {
    const [state, setState] = useState<T | undefined>(() => {
        const foundItem = window.localStorage.getItem(key)
        if (foundItem)
            return typeof foundItem === 'object'
                ? JSON.parse(foundItem)
                : foundItem

        if (initialValue) {
            window.localStorage.setItem(
                key,
                typeof initialValue === 'object'
                    ? JSON.stringify(initialValue)
                    : (initialValue as unknown as string)
            )
        }
        return initialValue
    })

    const setItem = (value: T) => {
        const parsed = typeof value === 'object' ? JSON.stringify(value) : value
        window.localStorage.setItem(key, parsed as string)
        setState(value)
    }

    return [state, setItem] as [T, (v: T) => void]
}
