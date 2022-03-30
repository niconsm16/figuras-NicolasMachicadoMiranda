import React, { useEffect, useState } from "react";
import { getItem, figures } from "../../temp/Productos";
import { ItemDetail } from "./ItemDetail";
import WaitItem from '../../WaitScenes/WaitDetail'
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";


export const ItemDetailContainer = () => {

    let [details, setDetails] = useState({})
    let [completed, task] = useState(false)

    const { item } = useParams()


    useEffect(() => {
        getItem(figures)
            .then((res) => setDetails(res.find((itemSelect) => itemSelect.id === Number(item))))
            .then(() => task(true))
            .catch((err) => console.log('no se pudo recibir el detalle: ', err))
    }, [item])

    return (
        <>
            {completed
                ? <motion.div animate={{ x: 0, y: 0, opacity: 1 }} transition={{ opacity: 0, delay: .1, x: { type: "spring", stiffness: 0 }, default: { duration: .2 }, }}>
                    <ItemDetail itemSelect={details} />
                </motion.div>

                : <motion.div animate={{ x: 0, y: 0, opacity: 0 }} transition={{ opacity: 1, delay: 1.5, x: { type: "spring", stiffness: 1 }, default: { duration: .1 }, }}>
                    <WaitItem />
                </motion.div>}
        </>
    )
}

