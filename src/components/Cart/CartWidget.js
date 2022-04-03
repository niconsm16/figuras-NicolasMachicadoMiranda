import React, { useContext } from "react"
import { FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"


export const CartWidget = () => {

    const { cartNum } = useContext(CartContext)

    // Tailwind Class

    const cNum = " rounded-full px-2"
    const cCart = "fill-amarillo hover:bg-black hover:fill-[#7ae800] mr-2.5 cursor-pointer ease-in duration-300"

    // Render

    return (
        <>
            <span className={cNum}>{cartNum()}</span>
            <Link to='/cart'>
                < FaShoppingCart className={cCart} />
            </Link>
        </>
    )
}