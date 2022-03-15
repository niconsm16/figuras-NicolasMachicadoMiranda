import React, { useState } from "react";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa"


const ItemCount = () => {

    let [count, setCount] = useState(0)

    function sumaItem() {
        setCount(count++)
    }

    const restaItem = () => {
        setCount(count--)
    }

    return (
        <div className="flex flex-col w-48 h-28 bg-white rounded-lg shadow-boxes font-ptsans m-auto">
            <div className="w-full h-2/5 bg-black text-white text-center rounded-supboxes"> PRODUCTO</div>
            <div className="flex w-full h-full bg-zinc-900 justify-between text-amarillo items-center text-3xl px-2">
                <button onClick={restaItem} className="hover:drop-shadow-[0_0px_5px_orange] transition duration-500"><FaMinusSquare /></button>
                <span>{count}</span>
                <button onClick={sumaItem} className="hover:drop-shadow-[0_0px_5px_orange] transition duration-500"><FaPlusSquare /></button>
            </div>
            <div className="w-full h-2/5 bg-black text-white text-center rounded-infboxes">Agregar al Carrito</div>
        </div>

    )
}

export default ItemCount
