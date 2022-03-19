import React, { useState } from "react";
import Item from "./Item";

const productos = require('./Productos')

let waitDb = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            productos.figures !== null ? resolve(console.log('DB con datos! ')) : reject(console.log('DB vacio'))
        }, 2000)
    })
}
waitDb()

    .then(() => {
        console.log('hola')
    })
    .catch((err) => {
        return (
            <div>No se pudo cargar los productos: {err}</div>
        )
    })



const ItemList = () => {

    let [products, setProducts] = useState(productos.figures)

    return (
        <div className="flex justify-center text-center m-6 select-none flex-wrap">
            {
                products.map((n) => {
                    return (
                        <Item key={n.id} url={n.url} name={n.name} details={n.details} price={n.price} />
                    )
                })
            }
        </div>
    )
}




export default ItemList