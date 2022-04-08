import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    let [cart, setCart] = useState([])

    const addItem = (item) => {

        let exist = cart.some(n => n.id === item.id)
        if (exist) {
            let find = cart.findIndex(n => n.id === item.id)
            cart[find].count += item.count
            setCart([...cart])
        }
        else {
            setCart([...cart, item])
        }
    }

    const removeItem = (id) => {
        console.log(id)
        cart.length === 1
            ? setCart([])
            : setCart(cart.filter(n => n.id !== id))
    }

    const cartNum = () => {
        return cart.reduce((total, op) => total += op.count, 0)
    }

    const cartTotal = () => {
        return cart.reduce((total, item) => total += item.price * item.count, 0)
    }

    const emptyCart = () => {
        setCart([])
    }

    // Renderizado

    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            removeItem,
            cartNum,
            cartTotal,
            emptyCart
        }}>
            {children}
        </CartContext.Provider>
    )

}