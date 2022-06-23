import { Skeleton } from 'components'

export default function SkeletonPost() {
    return (
        <article className="max-w-[770px] h-[calc(100vh-200px)] flex-1 space-y-5">
            <Skeleton />
            <Skeleton />
            <Skeleton paragraph={{ rows: 10 }} />
        </article>
    )
}
