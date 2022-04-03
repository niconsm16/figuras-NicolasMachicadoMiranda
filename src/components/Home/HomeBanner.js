import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"


// BD banner

const fotos = [
    'https://wallpapercave.com/wp/wp1829344.jpg',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ab0b473b-3434-4d5b-ac4b-82407c923ef4/dduw89a-c9e95780-4262-4318-add1-c059e13742c9.jpg/v1/fill/w_1549,h_516,q_70,strp/my_sh_figuarts_dragon_ball_collection_by_anubis_007_dduw89a-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvYWIwYjQ3M2ItMzQzNC00ZDViLWFjNGItODI0MDdjOTIzZWY0XC9kZHV3ODlhLWM5ZTk1NzgwLTQyNjItNDMxOC1hZGQxLWMwNTllMTM3NDJjOS5qcGciLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.vrrjAksbryuw9s7HQ11Jv_JJhtn85pImQer7lXOj_aQ',
    'https://i.pinimg.com/originals/02/fd/b7/02fdb7fadcdb4c24bd910626a0b631d9.jpg',
    'https://i1.wp.com/liralcas.com/wp-content/uploads/2019/02/Blog_funko.jpg?fit=1600%2C1067&ssl=1',
]
const leyendas = [
    'Figuras de todo el mundo, únicas',
    'Los lanzamientos más recientes del mercado',
    'Nuevos y usados, on Demand',
    'Resellers oficiales de las mejores marcas'
]

// Framer Variants

const timing = 5000

const variant = {
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

const variant2 = {
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

// Componente

const HomeBanner = () => {

    const [count, setCount] = useState(0)

    const boton = () => {
        setTimeout(() => {
            count === fotos.length - 1
                ? setCount(0)
                : setCount(count + 1)
        }, timing);
    }

    useEffect(() => {
        boton()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count])

    // Tailwind Class

    const cBannerContainer = `bg-black overflow-hidden z-0 bg-gradient-to-l before:absolute before:z-10 before:top-0 before:w-full before:h-[68.5vh] before:bg-gradient-to-r ${(count % 2) === 0 ? 'before:from-black before:to-transparent' : 'before:from-transparent before:to-black'} `
    const cBox = " flex mt-16 bg-black h-[60vh] w-full"
    const cMotionLegend = `absolute flex h-[70%] items-center top-[0] mx-12 z-30 w-1/3 ${(count % 2) === 0 ? 'left-0 text-left' : 'right-0 text-right'}`
    const cLegend = 'flex place-self-center grid text-white font-fredoka text-6xl transition-opacity'
    const cImg = "w-full overflow-hidden object-cover h-[60vh] blend"

    // Renderizado

    return (

        <div className={cBannerContainer}>
            <AnimatePresence>
                <motion.div className={cBox}
                    key={count}
                    variants={count % 2 === 0 ? variant2 : variant}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                >
                    <img src={fotos[count]} alt='vos' className={cImg} />
                </motion.div>
            </AnimatePresence>
            <motion.div className={cMotionLegend}
                key={count}
                variants={count % 2 === 0 ? variant : variant2}
                initial="hidden"
                animate="show"
                exit="exit"
            >
                <div className={cLegend}>{leyendas[count]}</div>
            </motion.div>
        </div>

    )
}

export default HomeBanner