import React, { useContext, useState } from "react";
import { ItemCondition } from "./ItemDetailElements";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../Cart/CartContext";
import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa'
import { Currency, Description, GoToCart, Mark, Stock, Version, Year } from "./ItemDetailStrings";


export const ItemDetail = ({ itemSelect }) => {

    let { id, category, model, name, price, url, img, logo, mark, year, version, condition, stock, description } = itemSelect

    const { cart, addItem, removeItem } = useContext(CartContext)

    let initial = 1
    let prodstock = stock
    let itemCondition = condition === 0 ? 'Nuevo' : 'Usado'


    // Funcion del ItemCount ===================================================================

    let [count, setCount] = useState(1) // Cantidad de valores el el carrito

    const addToCart = (count) => {
        const ItemToAdd = { id, name, price, url, count }
        addItem(ItemToAdd)
    }

    const removeToCart = () => {
        removeItem(id)
    }

    // ==========================================================================================

    let [bigImg, setImg] = useState(url) // Hook para los thumbs

    // Tailwind Class

    const cContainer = "absolute flex w-full h-fit top-0 pt-16 justify-center bg-zinc-100"
    const cBox = "flex w-11/12 h-fit min-h-screen justify-around px-6 py-8 justify-center bg-gradient-to-t from-zinc-200 to-zinc-100"
    const cBigImg = "flex  flex-col items-center w-1/2"
    const cThumb = "h-24 w-16 m-1 object-contain cursor-pointer"
    const cDescBox = "flex flex-col font-book antialiased fonts items-end w-1/4 justify-items-center text-right"
    const cLogo = "h-16 w-full mt-2 mb-6 object-contain justify-self-end"
    const cCategory = "font-fredoka pr-1 text-md bg-gradient-to-r from-transparent to-amarillo"
    const cName = "font-racing pr-1 text-4xl my-1"
    const cPrice = "text-2xl pr-1 font-bakbak bg-gradient-to-r from-transparent to-violet-500"
    const cItemData = "flex text-[small] flex-col items-end my-2"
    const cItemCount = "flex flex-col w-full items-center"
    const cCartButton = "flex w-48 justify-center items-center font-fredoka font-bold rounded text-center p-2 mx-8 bg-amarillo hover:bg-black hover:text-amarillo transition duration-300 uppercase antialiased"

    // Render

    return (
        <div className={cContainer} >
            <div className={cBox}>
                <div className="m-1">
                    { // Mapeo de thumbs de cada producto
                        img.map((thumb, index) => {
                            return (
                                <img
                                    key={index}
                                    src={thumb}
                                    onClick={() => setImg(thumb)}
                                    alt='thumb' className={cThumb} />)
                        })
                    }
                </div>
                <div className={cBigImg}>
                    <img src={bigImg} alt={category} className="h-full object-cover" />
                </div>
                <div className={cDescBox}>
                    <img src={logo} alt={logo} className={cLogo} />
                    <h2 className={cCategory}>{category} {model}</h2>
                    <h3 className={cName}>{name}</h3>
                    <h3 className={cPrice}>{price},00 {Currency}</h3>
                    <div className={cItemData}>
                        <p><b>{Mark}:</b> {mark.toUpperCase()}</p>
                        <p><b>{Year}:</b> {year}</p>
                        <p><b>{Version}:</b> {version}</p>
                        <p><b>{Stock}:</b> {stock} unidades</p>
                        <ItemCondition cond={condition}>{itemCondition}</ItemCondition>
                    </div>
                    <div className="bg-zinc-100 rounded py-2 px-3">
                        <p className="font-bold text-[small] pb-1">{Description}:</p>
                        <p className="text-[small]">{description}</p>
                    </div>
                    <div className={cItemCount}>
                        <ItemCount
                            id={id}
                            stock={prodstock}
                            initial={initial}
                            count={count}
                            setCount={setCount}
                            onAdd={addToCart}
                            outAdd={removeToCart}
                        />
                        {cart.length === 0
                            ? ''
                            : <Link to='/cart' className={cCartButton}>
                                <FaShoppingCart className="mx-2" />
                                {GoToCart}
                            </Link>}
                    </div>
                </div>
            </div>
        </div>
    )
}