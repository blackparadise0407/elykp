import { RefObject, useEffect, useRef } from 'react'

interface HeadingsElementMap {
    [key: string]: IntersectionObserverEntry
}

export const useIntersectionObserver = <T extends HTMLElement>(
    ref: RefObject<T>,
    setActiveId: (id: string) => void
) => {
    const headingElementsRef = useRef<HeadingsElementMap>({})

    useEffect(() => {
        if (ref.current) {
            const callback = (headings: IntersectionObserverEntry[]) => {
                headingElementsRef.current = headings.reduce(
                    (
                        map: HeadingsElementMap,
                        headingElement: IntersectionObserverEntry
                    ) => {
                        map[headingElement.target.id] = headingElement
                        return map
                    },
                    headingElementsRef.current
                )
                const visibleHeadings: IntersectionObserverEntry[] = []
                Object.keys(headingElementsRef.current).forEach((key) => {
                    const headingElement = headingElementsRef.current[key]
                    if (headingElement.isIntersecting)
                        visibleHeadings.push(headingElement)
                })

                const getIndexFromId = (id: string) =>
                    headingElements.findIndex((heading) => heading.id === id)
                if (visibleHeadings.length === 1) {
                    setActiveId(visibleHeadings[0].target.id)
                } else if (visibleHeadings.length > 1) {
                    const sortedVisibleHeadings = visibleHeadings.sort(
                        (a, b) =>
                            getIndexFromId(a.target.id) -
                            getIndexFromId(b.target.id)
                    )

                    setActiveId(sortedVisibleHeadings[0].target.id)
                }
            }

            const observer = new IntersectionObserver(callback, {
                rootMargin: '-50px 0px -40% 0px',
            })
            const headingElements = Array.from(
                ref.current.querySelectorAll('h1')
            )
            headingElements.forEach((element) => observer.observe(element))
            return () => observer.disconnect()
        }
    })
}
