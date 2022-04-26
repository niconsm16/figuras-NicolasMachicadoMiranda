import React, { useState } from "react";
import { FaPlusSquare, FaMinusSquare, FaRedoAlt, FaCartPlus } from "react-icons/fa";
import { AddTitle, More, Product, RebootTitle, Unit, Units, Last } from './ItemStrings';

const ItemCount = (props) => {

    const [showStock, setStock] = useState(props.stock - 1) // Mostrador de stock
    const [realStock, setRealStock] = useState(props.stock) // Inventario real de stock

    // Interacción dentro del cuadro interactivo (botones de selección de cantidad de productos)

    function sumaItem() {
        if ((props.count === realStock) || (realStock === 0)) { return }
        else {
            props.setCount(props.count + 1)
            setStock(showStock - 1)
        }
    }

    const restaItem = () => {
        if (props.count === 1) { return }
        else {
            props.setCount(props.count - 1)
            setStock(showStock + 1)
        }
    }

    // Interacción con los elementos finales, como ser el carrito en sí, inventario real

    const addToCart = () => {
        if ((props.count > 0) && (realStock >= 1) && (showStock >= 0)) {
            props.onAdd(props.count) // devuelvo el valor del contador a la función addToCart
            setRealStock(realStock - props.count)  // Reconfiguro el stock real actual
            setStock(showStock - 1) // Reconfiguro el stock mostrado en pantalla
            props.setCount(1) // Reinicio el contador a 1
            realStock === 0 && setStock(0) // Si el stock real es 0 entonces seteo el stock a mostrar en 0
        }
    }

    const resetProduct = () => {
        if (realStock === props.stock) {
            return // Si el stock real coincide con el stock heredado del producto entonces no se realiza acción
        } else {
            props.onAdd(0) // Reinicio el valor de productos llevados a 0
            props.outAdd() // Borro el producto del carrito
            props.setCount(props.initial) // Reinicio el contador al valor heredado del padre (prop)
            setStock(props.stock - 1) // Ajusto el mostrador de inventario
            setRealStock(props.stock) // Reinicio la cantidad real de inventario al heredado del padre (prop)
        }
    }

    // Tailwind Class

    const cContainer = "flex flex-col w-3/4 h-28 bg-white rounded-lg my-4 font-ptsans m-auto"
    const cStock = "w-full h-2/5 bg-black text-white text-center text-sm py-1 font-roboto rounded-supboxes antialiased"
    const cCountContainer = "flex w-full h-full bg-zinc-900 justify-between text-amarillo items-center text-3xl px-2"
    const cSus = `transition duration-500 ${((realStock === 0) || (props.count === 1)) ? 'text-[#4b453c]' : 'hover:drop-shadow-[0_0px_5px_orange]'}`
    const cAdd = `transition duration-500 ${((props.count === realStock) || (realStock === 0)) ? 'text-[#4b453c]' : 'hover:drop-shadow-[0_0px_5px_orange]'}`
    const cAddToCartContainer = "flex cursor-pointer w-full h-2/5 bg-black rounded-infboxes"
    const cAddToCart = `flex w-3/4 justify-center rounded-[0_0_0_10px] text-center text-sm py-1 font-roboto hover:text-black hover:font-bold transition ease-in ${realStock === 0 ? 'text-[#4b453c] hover:bg-[#4b453c]' : 'text-white hover:bg-amarillo'}`
    const cReset = "flex w-1/4 justify-center text-white rounded-[0_0_10px_0] text-center text-sm py-1 font-roboto hover:text-black hover:bg-amarillo hover:font-bold transition ease-in"

    // Renderizado

    return (
        <div className={cContainer}>
            <div className={cStock}>{Product}
                {showStock >= 0
                    ? (realStock === 1
                        ? Last
                        : showStock)
                    : '0'}
                {showStock === 1
                    ? Unit
                    : (realStock === 1
                        ? Unit
                        : Units)}
                {showStock > 0 ? More : ""}
            </div>

            <div className={cCountContainer}>
                <button onClick={restaItem} className={cSus}>
                    <FaMinusSquare />
                </button>
                <span>{realStock > 0 ? props.count : "0"}</span>
                <button onClick={sumaItem} className={cAdd}>
                    <FaPlusSquare />
                </button>
            </div>

            <div className={cAddToCartContainer}>
                <div onClick={addToCart} title={AddTitle} className={cAddToCart}><FaCartPlus /></div>
                <div onClick={resetProduct} title={RebootTitle} className={cReset}><FaRedoAlt /></div>
            </div>
        </div >
    )
}

export default ItemCount