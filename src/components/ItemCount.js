import React, { useState, useEffect } from "react";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa"
import { Product, Units, AddCart } from './Strings';


const ItemCount = () => {

    let [count, setCount] = useState(0)
    let [stock, setStock] = useState(6)

    function sumaItem() {

        if (stock >= 0) {
            setCount(count++)
            setStock(stock--)

        }
    }
    const restaItem = () => {
        if (count >= 0) {
            setCount(count--)
            setStock(stock++)

        }
    }

    useEffect(() => {


    })




    return (
        <div className="flex flex-col w-48 h-28 bg-white rounded-lg shadow-boxes font-ptsans m-auto">
            <div className="w-full h-2/5 bg-black text-white text-center rounded-supboxes"> {Product}{stock}{Units}</div>
            <div className="flex w-full h-full bg-zinc-900 justify-between text-amarillo items-center text-3xl px-2">
                <button onClick={restaItem} className="hover:drop-shadow-[0_0px_5px_orange] transition duration-500"><FaMinusSquare /></button>
                <span>{count}</span>
                <button onClick={sumaItem} className="hover:drop-shadow-[0_0px_5px_orange] transition duration-500"><FaPlusSquare /></button>
            </div>
            <div className="w-full h-2/5 bg-black text-white text-center rounded-infboxes">{AddCart}</div>
        </div>
    )
}

export default ItemCount
