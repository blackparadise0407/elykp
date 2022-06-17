import { DependencyList, RefObject, useEffect, useState } from 'react'
import slugify from 'slugify'

export function useHeadingData<T extends HTMLElement>(
    ref: RefObject<T>,
    deps?: DependencyList
): Heading[] {
    const [headings, setHeadings] = useState<Heading[]>([])

    useEffect(() => {
        if (ref.current) {
            const headings = Array.from(ref.current.querySelectorAll('h1'))

            setHeadings(
                headings.map((heading) => {
                    const { innerHTML, nodeName } = heading
                    const id = slugify(innerHTML, {
                        replacement: '_',
                        lower: true,
                        strict: true,
                    })
                    return {
                        id,
                        title: innerHTML,
                        nodeName,
                    } as Heading
                })
            )
        }
    }, deps)

    return headings
}
