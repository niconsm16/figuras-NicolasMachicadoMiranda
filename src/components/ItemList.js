import React, { useState, useEffect } from "react";
import Item from "./Item";
import { getItem, figures } from "./Productos";



const ItemList = () => {

    let [products, setProducts] = useState([]) // Seteo el estado inicial vacío en array

    useEffect(() => { // Mantenemos vigilado todo el tiempo los eventos para actualizar la data una vez llegada
        getItem(figures) // Ejecuto la demora simulando un servidor con el array 'figures'
            .then(() => {
                setProducts(figures) // Actualizo valores con los cargados en la línea de arriba
            })
            .catch((err) => {
                console.log('No se pudo recibir la información: ', err)
            })
    }, [])

    return (
        <div className="flex justify-center text-center m-6 select-none flex-wrap">
            {products.map((n) => { // Mapeamos todos los productos
                return (<Item key={n.id} img={n.url} name={n.name} details={n.details} price={n.price} />)
            })
            }
        </div>
    )
}

export default ItemList