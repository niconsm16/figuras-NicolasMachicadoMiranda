import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export const Success = ({ id }) => {

    // Tailwind CSS
    const cSuccessContainer = "flex flex-col h-screen justify-around pt-28 px-12 items-center bg-lime-300"
    const cSuccessTitle = "font-fredoka text-8xl md:text-6xl md:text-center text-black plusfonts animate-bounce"
    const cIdMessage = 'my-4 px-6 pt-2 pb-3 bg-black text-white text-2xl md:text-xl md:text-center rounded-full z-10'
    const cWave = 'absolute md:fixed bottom-0 w-full bg-transparent'
    const cBack = "py-2 px-4 bg-amarillo rounded font-bold hover:bg-black hover:text-amarillo transition duration-300 z-10"

    return (
        <div className={cSuccessContainer}>
            <h2 className={cSuccessTitle}>Transacción exitosa!</h2>

            <h2 className={cIdMessage}>Este es el ID de tu transacción: <b>{id}</b></h2>

            <motion.div className="z-10"
                initial={{ y: 0, scale: 1 }}
                transition={{ duration: .25 }}
                whileTap={{ y: -500, scale: 50 }}
            >
                <Link to='/' className={cBack}>
                    Volver al inicio
                </Link>
            </motion.div>
            <div className={`${cWave} fill-lime-400`}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" >
                    <path d="M-40.34,82.41 C157.16,-77.44 207.95,126.81 573.08,-18.23 L533.01,165.30 L0.00,150.00 Z" >
                    </path>
                </svg>
            </div>
            <div className={`${cWave} fill-lime-500`}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" >
                    <path d="M-47.11,173.20 C141.92,-87.31 231.65,124.84 574.77,31.09 L533.01,165.30 L0.00,150.00 Z" >
                    </path>
                </svg>
            </div>
        </div>
    )
}