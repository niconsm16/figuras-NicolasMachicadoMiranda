// Framer Variants

export const variant = {
    hidden: {
        opacity: 0,
        x: 1000,
        y: 0,
    },
    show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
            //    duration: (timing / 1000) - 1,
        }
    },
    exit: {
        opacity: 0,
        y: 0,
        x: -1000,
        position: 'absolute',
        transition: {
            duration: .2
        }
    },
}

export const variant2 = {
    hidden: {
        opacity: 0,
        x: -1000,
        y: 0,
    },
    show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
            //    duration: (timing / 1000) - 2,
        }
    },
    exit: {
        opacity: 0,
        y: 0,
        x: 1000,
        position: 'absolute',
        transition: {
            duration: .2
        }
    },
}