import React, { useEffect, useState } from 'react';
import { getItem, figures } from "../temp/Productos";
import ItemList from './ItemList';
import WaitItem from '../WaitScenes/WaitList';



export const ItemListContainer = () => {


    let [products, setProducts] = useState([]) // Seteo el estado inicial vacío en array
    let [completed, task] = useState(false)

    useEffect(() => { // Mantenemos vigilado todo el tiempo los eventos para actualizar la data una vez llegada
        getItem(figures) // Ejecuto la demora simulando un servidor con el array 'figures'
            .then((res) => { setProducts(res) })// Actualizo valores con los cargados en la línea de arriba
            .then(() => task(true))
            .catch((err) => {
                console.log('No se pudo recibir la información: ', err)
            })
    }, [])

    return (
        <>


            {completed ? <ItemList products={products} /> : <WaitItem />}

        </>
    )
}
