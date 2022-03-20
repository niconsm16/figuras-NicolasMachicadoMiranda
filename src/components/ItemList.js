import React, { useState, useEffect } from "react";
import Item from "./Item";

// Preparando la promesa

let waitDb = () => {
    const productos = require('./Productos')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            productos.figures !== null ? resolve(console.log('DB con datos! ')) : reject(console.log('DB vacio'))
        }, 2000)
    })
}


const ItemList = () => {

    let [products, setProducts] = useState([]) // Seteo el estado inicial vacío en array

    useEffect(() => { // Mantenemos vigilado todo el tiempo los eventos para actualizar la data una vez llegada
        waitDb() // Ejecuto la demora simulando un servidor
            .then(() => {
                const productos = require('./Productos') // utilizo el require como si fuese un fetch o axios
                setProducts(productos.figures) // Actualizo valores con los cargados en la línea de arriba
            })
            .catch((err) => {
                console.log('No se pudo recibir la información: ', err)
            })
    }, [])

    return (
        <div className="flex justify-center text-center m-6 select-none flex-wrap">
            {products.map((n) => { // Mapeamos todos los productos
                return (<Item key={n.id} url={n.url} name={n.name} details={n.details} price={n.price} />)
            })
            }
        </div>
    )
}

export default ItemList