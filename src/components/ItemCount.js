import React, { useState } from "react";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa"
import { Product, Units, AddCart } from './Strings';



const ItemCount = (props) => {

    let [count, setCount] = useState(props.initial)
    let [inStock, setStock] = useState(props.stock)

    function sumaItem() {
        if (count === props.stock) { return }
        else {
            setCount(count + 1)
            setStock(inStock - 1)
        }
    }

    const restaItem = () => {
        if (count === 1) { return }
        else {
            setCount(count - 1)
            setStock(inStock + 1)
        }
    }


    return (
        <div className="flex flex-col w-48 h-28 bg-white rounded-lg shadow-boxes font-ptsans m-auto">
            <div className="w-full h-2/5 bg-black text-white text-center text-sm py-1 font-roboto rounded-supboxes antialiased"> {Product}{inStock}{Units}</div>
            <div className="flex w-full h-full bg-zinc-900 justify-between text-amarillo items-center text-3xl px-2">
                <button onClick={restaItem} className="hover:drop-shadow-[0_0px_5px_orange] transition duration-500"><FaMinusSquare /></button>
                <span>{count}</span>
                <button onClick={sumaItem} className="hover:drop-shadow-[0_0px_5px_orange] transition duration-500"><FaPlusSquare /></button>
            </div>
            <div onClick={() => { props.onAdd(count) }} className="cursor-pointer w-full h-2/5 bg-black text-white text-center text-sm py-1 font-roboto rounded-infboxes hover:bg-amarillo hover:text-black hover:font-bold transition ease-in">{AddCart}</div>
        </div>
    )



}

export default ItemCount
