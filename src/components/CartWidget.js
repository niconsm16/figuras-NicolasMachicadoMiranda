import React from "react"
import { FaShoppingCart } from "react-icons/fa"



export const CartWidget = ({ b }) => {

    return (
        <>
            <span className=" rounded-full px-1">{b}</span>
            < FaShoppingCart className="fill-amarillo hover:bg-black hover:fill-[#7ae800] mr-2.5 bg-zinc-800 cursor-pointer ease-in duration-300" />
        </>
    )
}