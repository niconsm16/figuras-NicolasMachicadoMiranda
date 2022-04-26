import { useContext } from "react"
import { Currency } from '../Item/ItemDetail/ItemDetailStrings'
import { CartContext } from "./CartContext"
import { DelCart, EmptyCart, Price, Quantity, Subtotal, Total, YouCart, Unit, Units, GoCheckout } from "./CartStrings"
import { FaTimesCircle, FaMoneyBillWave } from 'react-icons/fa'
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Cart = () => {

    const { cart, cartTotal, removeItem, emptyCart } = useContext(CartContext)

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30,
        duration: 0.5,
    };

    // Tailwind Class

    const cContainer = "bg-zinc-200 w-full min-h-screen max-h-full pt-16 md:pt-0"
    const cTitle = "text-center text-6xl font-guy pt-12 mb-10 tracking-wide plusfonts text-celeste"
    const cEmptyCart = "flex justify-center items-center bg-black text-white rounded mx-20 md:mx-0 my-1 py-2 font-fredoka"
    const cItemscontainer = "md:flex md:justify-center"
    const cItemBox = "flex md:w-max justify-between items-center bg-zinc-500 text-zinc-200 border-black mx-20 md:mx-0 my-1 py-2 rounded"
    const cDelButtonBox = "w-5 pl-4 text-2xl hover:text-white transition duration-300"
    const cDelButton = "drop-shadow-plus"
    const cItemInfoBox = "px-8 font-fredoka w-5/6 text-shadow-fort"
    const cName = "uppercase font-bold text-white"
    const cSub = "text-[#7ae800]"
    const cImg = "w-28 h-28 object-contain px-4"
    const cDelCart = "w-fit md:w-full mx-20 md:mx-0 bg-amarillo my-1 py-2 px-4 font-guy text-black rounded-lg transition duration-300 hover:scale-110 tracking-wide plusfonts"
    const cGoCheckContainer = "flex w-1/3 md:w-full justify-center"
    const cGoCheck = "flex w-fit md:w-full h-fit my-1 py-2 px-4 items-center md:justify-center bg-indigo-700 text-zinc-100 font-guy rounded-lg transition duration-300 hover:scale-110 tracking-wide plusfonts "
    const cTotalContainer = "w-1/3 md:w-full flex justify-end md:justify-center items-center text-3xl rounded mx-20 md:mx-0 my-1 py-2 px-4 pb-12 font-fredoka tracking-wide plusfonts text-celeste"
    const cTotalTitle = "font-guy pr-2"
    const cTotal = "text-black font-guy"

    // Render

    return (
        <div className={cContainer}>
            <div className={cTitle}>{YouCart}</div>
            {
                cart.length === 0
                    ? (<div className={cEmptyCart}>{EmptyCart}</div>)
                    : cart.map(n => (
                        <motion.div className={cItemscontainer}
                            key={n.id}
                            initial={{ scale: 5 }}
                            whileInView={{ scale: 1 }}
                            layout transition={spring}
                        >
                            <div className={cItemBox}>
                                <div className={cDelButtonBox}>
                                    <motion.button
                                        initial={{ scale: 1 }}
                                        whileTap={{ scale: .5 }}
                                    >
                                        <FaTimesCircle className={cDelButton} onClick={() => removeItem(n.id)} />
                                    </motion.button>
                                </div>
                                <div className={cItemInfoBox}>
                                    <div className={cName}>{n.name}</div>
                                    <div>{Price}: {n.price},00 {Currency}</div>
                                    <div>{Quantity}: {n.count} {n.count === 1 ? Unit : Units}</div>
                                    <div className={cSub}>{Subtotal}: {n.count * n.price},00 {Currency}</div>
                                </div>
                                <div className="w-28">
                                    <img src={n.url} alt={n.name} className={cImg} />
                                </div>
                            </div>
                        </motion.div>
                    ))
            }
            {
                cart.length === 0
                    ? ''
                    : (
                        <div className="flex md:flex-col">
                            <div className="w-1/3 md:w-full">
                                <button onClick={emptyCart} className={cDelCart}>{DelCart}</button>
                            </div>
                            <div className={cGoCheckContainer}>
                                <Link to="/checkout" className={cGoCheck}><FaMoneyBillWave className="mr-2" />{GoCheckout}</Link>
                            </div>
                            <div className={cTotalContainer}>
                                <div className={cTotalTitle}>{Total}: </div>
                                <div className={cTotal}> {cartTotal()} {Currency}</div>
                            </div>
                        </div>
                    )
            }
        </div >
    )
}

export default Cart



