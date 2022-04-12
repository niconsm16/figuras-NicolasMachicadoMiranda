import { useEffect, useState } from 'react'
import { motion } from "framer-motion"
// MOCK import { getItem, logos } from '../temp/Productos'
import { Link } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { figuresdb } from '../../firebase/config'
import { variants } from './DropdownVariants'

export const Dropdown = () => {

    // Creacion de Array de Categorias ========================================================


    const [names, setNames] = useState([])

    useEffect(() => {

        const categoryRef = collection(figuresdb, 'logos')

        getDocs(categoryRef)
            .then((res) => {
                const logos = res.docs.map((logo) => (Object.values({ ...logo.data() })))
                setNames(logos[0])
            })
            .catch((err) => console.log('dropdown', err))
    }, [])

    // Variables y Funciones Framer ============================================================

    const [menu, setMenu] = useState(false)

    const clickHandle = () => { setMenu(true) }
    const mouseOut = () => { setMenu(false) }

    // Tailwind Class

    const cCategoryButton = "text-grey-darkest font-thin text-xl z-[1]"
    const cDropdownMotion = "relative top-[30px] left-[-100px]"
    const cDropdownBox = "absolute pb-2 text-white bg-black rounded-[0_0_5px_5px] "
    const cLink = "px-4 py-1 hover:bg-amarillo hover:text-black w-full"

    // Render

    return (
        <>
            <button className={cCategoryButton}
                onMouseOver={clickHandle}
                onMouseOut={mouseOut} >
                Categorias
            </button>
            <motion.div className={cDropdownMotion}
                initial={false}
                animate={menu ? "open" : "closed"}
                variants={variants}
                transition={{ duration: 0.5 }}
            >
                <div className="w-auto text-left">
                    <div className={cDropdownBox}>
                        <ul className='w-max'
                            onMouseOver={clickHandle}
                            onMouseOut={mouseOut}>
                            {
                                names.map((n, index) => {
                                    return (
                                        <Link to={`/category/${n}`} key={index} >
                                            <li key={n.indexOf()} className={cLink}>{n}</li>
                                        </Link>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </motion.div>

        </>
    )
}