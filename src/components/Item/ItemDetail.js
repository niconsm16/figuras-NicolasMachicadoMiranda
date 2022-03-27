import React, { useState } from "react";
import { ItemCondition } from "./ItemDetailElements";
import ItemCount from "./ItemCount";


export const ItemDetail = ({ itemSelect }) => {

    let { category, model, name, price, url, img, logo, mark, year, version, condition, stock, description } = itemSelect
    let initial = 1
    let prodstock = stock
    let itemCondition = condition === 0 ? 'Nuevo' : 'Usado'

    // Funcion del ItemCount ===================================================================

    let [cartNumber, setCartNumber] = useState(0) // Cantidad de valores el el carrito

    const addToCart = (count) => {
        setCartNumber(cartNumber = cartNumber + count)
        count < 0 ? console.log(`${-count} productos eliminados`) : console.log(`${count} productos Agregados`); // Resolución al Desafío
        console.log(`${cartNumber} productos en el Carrito`) // Carrito
    }

    // ==========================================================================================




    let [bigImg, setImg] = useState(url)

    return (
        <div className="absolute flex w-full h-screen top-0 pt-16 justify-center bg=[#e7e9e7]" >
            <div className="flex w-11/12 h-auto justify-around px-6 py-8 justify-center bg-gradient-to-t from-zinc-200 to-zinc-100">
                <div className="m-1">
                    {
                        img.map((thumb, index) => { return (<img key={index} src={thumb} onClick={() => setImg(thumb)} alt='thumb' className="h-24 w-16 m-1 object-contain cursor-pointer" />) })
                    }
                </div>
                <div className="flex  flex-col items-center w-1/2">
                    <img src={bigImg} alt={category} className="h-full object-contain" />
                </div>
                <div className="flex flex-col items-end w-1/4 justify-items-center text-right">
                    <img src={logo} alt={logo} className="h-16 w-full mt-2 mb-6 object-contain justify-self-end" />
                    <h2 className="font-fredoka pr-1 text-md bg-gradient-to-r from-transparent to-amarillo">{category} {model}</h2>
                    <h3 className="font-racing pr-1 text-4xl my-1">{name}</h3>
                    <h3 className="text-2xl pr-1 font-bakbak bg-gradient-to-r from-transparent to-violet-500">{price},00 USD</h3>
                    <div className="flex flex-col items-end my-2">
                        <p><b>Marca:</b> {mark.toUpperCase()}</p>
                        <p><b>Año:</b> {year}</p>
                        <p><b>Versión:</b> {version}</p>
                        <ItemCondition cond={condition}>{itemCondition}</ItemCondition>
                        <p><b>Stock:</b> {stock} unidades</p>
                    </div>
                    <div className="bg-zinc-100 rounded py-2 px-3">
                        <p className="font-bold pb-1">Descripción:</p>
                        <p className="text-sm">{description}</p>
                    </div>
                    <ItemCount stock={prodstock} initial={initial} onAdd={addToCart} />
                </div>
            </div>
        </div>
    )
}