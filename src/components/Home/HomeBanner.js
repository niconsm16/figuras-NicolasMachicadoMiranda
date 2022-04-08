import React, { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { variant, variant2 } from "./FramerConfig"
import { collection, getDocs } from "firebase/firestore"
import { figuresdb } from '../../firebase/config'


const timing = 5000 // Intervalos de muestreo

// Componente

const HomeBanner = () => {

    const [count, setCount] = useState(0)

    // Cargar Banners y Leyendas
    const [banner, setBanner] = useState([])
    const [leyenda, setLeyenda] = useState([])
    const [charged, setCharge] = useState(false)
    const lengthRef = useRef() // Ref de longitud para no rerenderizar página

    useEffect(() => {
        let mount = true
        if (mount) {
            const bannerRef = collection(figuresdb, 'banner')
            getDocs(bannerRef).then(res => {
                setCharge(true)
                const tempBanner = res.docs.map((doc) => (doc.data().fotos))
                setBanner(tempBanner[0])
                const tempLeyenda = res.docs.map((doc) => (doc.data().leyendas))
                setLeyenda(tempLeyenda[0])
                lengthRef.current = tempBanner[0].length
            })
        }
        return () => { mount = false; setCharge(false) }
    }, [])

    const ref = useRef()

    useEffect(() => {
        let mount = true
        if (mount) {
            ref.current && clearInterval(ref.current)
            ref.current = setInterval(() => {
                setCount(s => s + 1)
            }, timing);
        }
        return () => { mount = false; setCharge(false) }
    }, [])

    count === lengthRef.current && setCount(0)

    // Tailwind Class

    const cBannerContainer = `bg-black overflow-hidden z-0 bg-gradient-to-l before:absolute before:z-10 before:top-0 before:w-full before:h-[28rem] before:bg-gradient-to-r ${charged && ((count % 2) === 0 ? 'before:from-black before:to-transparent' : 'before:from-transparent before:to-black')} `
    const cBox = " flex mt-16 bg-black h-96 w-full"
    const cMotionLegend = `absolute flex h-[28rem] items-center top-[0] mx-12 z-30 w-1/3 ${(count % 2) === 0 ? 'left-0 text-left' : 'right-0 text-right'}`
    const cLegend = 'flex place-self-center grid text-white font-fredoka text-6xl transition-opacity'
    const cImg = "w-full overflow-hidden object-cover h-96 blend"

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
                    <img src={banner[count]} alt='vos' className={cImg} />
                </motion.div>
            </AnimatePresence>
            <motion.div className={cMotionLegend}
                key={count}
                variants={count % 2 === 0 ? variant : variant2}
                initial="hidden"
                animate="show"
                exit="exit"
            >
                <div className={cLegend}>{leyenda[count]}</div>
            </motion.div>
        </div>

    )
}

export default HomeBanner