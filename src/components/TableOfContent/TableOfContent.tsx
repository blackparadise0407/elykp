import clsx from 'clsx'
import { memo } from 'react'

interface TableOfContentProps {
    headings: Heading[]
    activeId: string
}

export default memo(function TableOfContent({
    headings,
    activeId,
}: TableOfContentProps) {
    const handleClick = (id: string) => {
        document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' })
    }

    if (!headings.length) return null

    return (
        <div className="hidden md:block sticky top-20 h-min min-w-[180px] max-w-[300px] space-y-2">
            <h4 className="capitalize">ON THIS PAGE</h4>
            {headings.map(({ id, title }) => (
                <div
                    key={id}
                    title={title}
                    className={clsx(
                        'px-3 block relative text-sm font-medium hover:text-blue-500 cursor-pointer transition-colors truncate',
                        activeId === id && 'text-blue-500'
                    )}
                    onClick={() => handleClick(id)}
                >
                    {title}
                    {activeId === id && (
                        <div className="absolute top-0 left-0 w-[2px] h-full bg-blue-500"></div>
                    )}
                </div>
            ))}
        </div>
    )
})
