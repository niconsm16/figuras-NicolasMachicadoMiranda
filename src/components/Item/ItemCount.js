import React, { useState } from "react";
import { FaPlusSquare, FaMinusSquare, FaRedoAlt, FaCartPlus } from "react-icons/fa";
import { Product, Units } from './ItemStrings';


const ItemCount = (props) => {


    let [count, setCount] = useState(props.initial) // Contador temporal de mercadería para el carrito
    let [showStock, setStock] = useState(props.stock - 1) // Mostrador de stock
    let [realStock, setRealStock] = useState(props.stock) // Inventario real de stock

    // Interacción dentro del cuadro interactivo (botones de selección de cantidad de productos)

    function sumaItem() {
        if ((count === realStock) || (realStock === 0)) { return }
        else {
            setCount(count + 1)
            setStock(showStock - 1)
        }
    }

    const restaItem = () => {
        if (count === 1) { return }
        else {
            setCount(count - 1)
            setStock(showStock + 1)
        }
    }

    // Interacción con los elementos finales, como ser el carrito en sí, inventario real

    const addToCart = () => {
        if ((count > 0) && (realStock >= 1) && (showStock >= 0)) {
            props.onAdd(count)
            setRealStock(realStock -= count)
            setStock(showStock -= 1)
            setCount(1)
            realStock === 0 && setStock(showStock = 0)
            console.log('Quedan en stock real: ' + realStock) // Muestreo Inventario Real
            console.log('Se mostrará en el contador de stock: ' + showStock) // Muestreo Inventario en pantalla
        }
    }

    const resetProduct = () => {
        if (realStock === props.stock) {
            return
        } else {
            props.onAdd(-(props.stock - realStock)) // Devuelvo la diferencia de stock en negativo para restaurar valores del carrito en origen
            setCount(count = props.initial) // Reinicio el contador al valor heredado del padre (prop)
            setStock(showStock = props.stock - 1) // Ajusto el mostrador de inventario
            setRealStock(realStock = props.stock) // Reinicio la cantidad real de inventario al heredado del padre (prop)
        }
    }

    return (
        <div className="flex flex-col w-48 h-28 bg-white rounded-lg shadow-boxes font-ptsans m-auto">
            <div className="w-full h-2/5 bg-black text-white text-center text-sm py-1 font-roboto rounded-supboxes antialiased">{Product}{showStock}{Units}</div>
            <div className="flex w-full h-full bg-zinc-900 justify-between text-amarillo items-center text-3xl px-2">
                <button onClick={restaItem} className="hover:drop-shadow-[0_0px_5px_orange] transition duration-500"><FaMinusSquare /></button>
                <span>{count}</span>
                <button onClick={sumaItem} className="hover:drop-shadow-[0_0px_5px_orange] transition duration-500"><FaPlusSquare /></button>
            </div>
            <div className="flex cursor-pointer w-full h-2/5 bg-black rounded-infboxes">
                <div onClick={addToCart} title="Agregar al Carrito" className="flex w-3/4 justify-center text-white rounded-[0_0_0_10px] text-center text-sm py-1 font-roboto hover:text-black hover:bg-amarillo hover:font-bold transition ease-in"><FaCartPlus /></div>
                <div onClick={resetProduct} title="Reiniciar producto" className="flex w-1/4 justify-center text-white rounded-[0_0_10px_0] text-center text-sm py-1 font-roboto hover:text-black hover:bg-amarillo hover:font-bold transition ease-in"><FaRedoAlt /></div>
            </div>
        </div>
    )
}

export default ItemCount