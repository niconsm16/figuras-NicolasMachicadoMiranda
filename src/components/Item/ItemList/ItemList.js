import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const greeting = 'Los + Buscados del mes'

const ItemList = ({ products }) => {

    // Tailwind Class

    const cContainer = "animate-appear bg-zinc-200 pt-24 pb-8  min-h-[89.3vh]"
    const cTitle = "text-center text-celeste plusfonts text-5xl antialised font-bold font-guy mx-8"
    const cProduct = "flex justify-center text-center m-6 select-none flex-wrap"

    // Render

    return (
        <div className={cContainer}>
            <h2 className={cTitle}>{greeting}</h2>
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