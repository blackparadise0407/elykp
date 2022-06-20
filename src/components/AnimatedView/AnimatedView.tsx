import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'
interface AnimatedViewProps {
    children: ReactNode
}

const variants: Variants = {
    initial: {
        y: 100,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
}

export default function AnimatedView({ children }: AnimatedViewProps) {
    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="initial"
        >
            {children}
        </motion.div>
    )
}
