import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const greeting = 'Aquí está el catálogo joven'

const ItemList = ({ products }) => {


    return (
        <div className="animate-appear">
            <h2 className="text-center text-8xl antialised font-ptsans m-8">{greeting}</h2>
            <div className="flex justify-center text-center m-6 select-none flex-wrap">
                {products.map((n) => { // Mapeamos todos los productos
                    return (
                        <Link to={`/item/${n.id}`} key={n.id} >
                            <motion.div key={n.id} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }}>
                                <motion.button key={n.id} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.7 }}>
                                    <Item key={n.id} img={n.url} name={n.name} model={n.model} details={n.details} price={n.price} />
                                </motion.button>
                            </motion.div>
                        </Link>
                    )
                })
                }
            </div>
        </div>
    )
}

export default ItemList