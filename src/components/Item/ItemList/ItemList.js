import React from "react";
import Item from "./Item";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";


const buscados = 'Los + Buscados del mes'
const solicitados = '+ Solicitados'



const ItemList = ({ products }) => {

    const routes = useParams()

    const title = () => {
        if (routes.solicitados) {
            return solicitados
        }
        if (routes.category) {
            return (<img src={products[0].logo} alt={products[0].mark} className={cImg} />)
        }
        if (window.location.pathname === '/buscados' || '/') {
            return buscados
        }
    }

    // Tailwind Class

    const cContainer = `animate-appear bg-zinc-200 ${window.location.pathname === '/' ? 'pt-8' : 'pt-24'} pb-8  min-h-[94vh]`
    const cTitle = "text-center text-celeste plusfonts text-5xl antialised font-bold font-guy mx-8"
    const cProduct = "flex justify-center text-center m-6 select-none flex-wrap"
    const cImg = "h-16 w-1/7 m-auto"
    // Render

    return (
        <div className={cContainer}>
            <h2 className={!routes.category ? cTitle : false}>{title()}</h2>
            <div className={cProduct}>
                {products.map((n) => { // Mapeamos todos los productos
                    return (
                        <Link to={`/item/${n.id}`} key={n.id} >
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, delay: .95 }}
                                viewport={{ once: false }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.7 }}
                                    transition={{ duration: .1 }}

                                >
                                    <Item
                                        img={n.url}
                                        category={n.category}
                                        name={n.name}
                                        model={n.model}
                                        details={n.details}
                                        price={n.price} />
                                </motion.button>
                            </motion.div>
                        </Link>
                    )
                })
                }
            </div>
        </div >
    )
}

export default ItemList