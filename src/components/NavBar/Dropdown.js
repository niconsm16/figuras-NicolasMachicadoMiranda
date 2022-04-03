import { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { getItem, logos } from '../temp/Productos'
import { Link } from 'react-router-dom'

export const Dropdown = () => {

    // Creacion de Array de Categorias ========================================================


    let [names, setNames] = useState([])

    useEffect(() => {
        getItem(logos)
            .then((res) => {
                setNames(Object.values(res))
            })
            .catch((err) => console.log('dropdown', err))
    }, [])

    // Variables y Funciones Framer ============================================================

    let [menu, setMenu] = useState(false)

    const clickHandle = () => { setMenu(true) }
    const mouseOut = () => { setMenu(false) }

    const variants = {
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
                                        <Link to={`/category/${n[0]}`} key={index} >
                                            <li key={n.indexOf()} className={cLink}>{n[0]}</li>
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