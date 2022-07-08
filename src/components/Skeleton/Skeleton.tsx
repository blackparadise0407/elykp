type SkeletonParagraphProps = {
    rows: number
}

interface SkeletonProps {
    width?: number | string
    paragraph?: boolean | SkeletonParagraphProps
}

const BaseSkeleton = ({ width }: Pick<SkeletonProps, 'width'>) => {
    return (
        <div
            className="animate-pulse w-full h-5 rounded bg-gray-200 dark:bg-neutral-700"
            style={{ width }}
        ></div>
    )
}

export default function Skeleton({ paragraph = false }: SkeletonProps) {
    if (paragraph && typeof paragraph === 'object') {
        const { rows } = paragraph
        return (
            <div className="space-y-2">
                {Array(rows)
                    .fill(0)
                    .map((_, idx) => (
                        <BaseSkeleton
                            key={idx}
                            width={idx === rows - 1 ? '80%' : undefined}
                        />
                    ))}
            </div>
        )
    }

    return <BaseSkeleton />
}
