import React, { useState } from "react";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa"
import { Product, Units, AddCart } from './Strings';



const ItemCount = ({ stock, initial, onAdd }) => {


    function sumaItem() {
        if (count === stock) { return }
        else {
            setCount(count++)
            setStock(inStock--)
            console.log(count)
            b(a = count)
        }
    }

    const restaItem = () => {
        if (count === 1) { return }
        else {
            setCount(count--)
            setStock(inStock++)
            console.log(count)
            b(a = count)
        }
    }

    let [count, setCount] = useState(initial)
    let [inStock, setStock] = useState(stock)

    let [a, b] = useState(count)

    return (
        <div className="flex flex-col w-48 h-28 bg-white rounded-lg shadow-boxes font-ptsans m-auto">
            <div className="w-full h-2/5 bg-black text-white text-center rounded-supboxes"> {Product}{inStock}{Units}</div>
            <div className="flex w-full h-full bg-zinc-900 justify-between text-amarillo items-center text-3xl px-2">
                <button onClick={restaItem} className="hover:drop-shadow-[0_0px_5px_orange] transition duration-500"><FaMinusSquare /></button>
                <span>{a}</span>
                <button onClick={sumaItem} className="hover:drop-shadow-[0_0px_5px_orange] transition duration-500"><FaPlusSquare /></button>
            </div>
            <div onClick={() => { onAdd(a) }} className="cursor-pointer w-full h-2/5 bg-black text-white text-center rounded-infboxes">{AddCart}</div>
        </div>
    )



}

export default ItemCount
