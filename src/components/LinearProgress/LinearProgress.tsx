import clsx from 'clsx'

import classes from './style.module.css'

interface LinearProgressProps {
    className?: string
}

export default function LinearProgress({ className }: LinearProgressProps) {
    return <progress className={clsx(classes.progress, className)} />
}
