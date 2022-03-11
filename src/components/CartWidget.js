import { FaShoppingCart } from "react-icons/fa"

export const CartWidget = () => {
    return (
        <>
            <p className=" rounded-full px-1">4</p>
            < FaShoppingCart className="fill-amarillo hover:bg-black hover:fill-[#7ae800] mr-2.5 bg-zinc-800 cursor-pointer ease-in duration-300" />
        </>
    )
}