export const variants = {
    open: {
        opacity: 1,
        x: 0,
        y: 0,
        zIndex: -1,
        transition: {
            y: { stiffness: 1000, velocity: 100 },
            delay: 0
        }
    },
    closed: {
        opacity: 0,
        x: 0,
        y: -450,
        zIndex: -1,
        transition: {
            y: { stiffness: 1000 },
            delay: .25,
        }
    },
}