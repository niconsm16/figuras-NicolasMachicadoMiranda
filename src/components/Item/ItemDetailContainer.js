import React, { useEffect, useState } from "react";
import { getItem, figures } from "../temp/Productos";
import { ItemDetail } from "./ItemDetail";
import WaitItem from '../WaitScenes/WaitDetail'
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () => {

    let [details, setDetails] = useState({})
    let [completed, task] = useState(false)

    const { item } = useParams()
    console.log('detcontainer', item)

    useEffect(() => {
        getItem(figures)
            .then((res) => setDetails(res.find((itemSelect) => itemSelect.id === Number(item))))
            .then(() => console.log(details))
            .then(() => task(true))
            .catch((err) => console.log('no se pudo recibir el detalle: ', err))
    })

    return (
        <>
            {completed ? <ItemDetail itemSelect={details} /> : <WaitItem />}
        </>
    )
}

