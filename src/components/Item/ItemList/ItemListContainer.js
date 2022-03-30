import React, { useEffect, useState } from 'react';
import { getItem, figures } from "../../temp/Productos";
import ItemList from './ItemList';
import WaitItem from '../../WaitScenes/WaitList';
import { useParams } from 'react-router-dom';



export const ItemListContainer = () => {

    let [products, setProducts] = useState([]) // Seteo el estado inicial vacío en array
    let [completed, task] = useState(false)

    const { category } = useParams()


    useEffect(() => { // Mantenemos vigilado todo el tiempo los eventos para actualizar la data una vez llegada
        getItem(figures) // Ejecuto la demora simulando un servidor con el array 'figures'
            .then((res) => {
                category === undefined
                    ? setProducts(res)
                    : setProducts(// Actualizo valores con los cargados en la línea de arriba
                        res.filter(n => (n.category === category)))
                task(true)
            })
            .catch((err) => {
                console.log('No se pudo recibir la información: ', err)
            })
    }, [category])



    return (
        <>


            {completed ? <ItemList products={products} /> : <WaitItem />}

        </>
    )
}
