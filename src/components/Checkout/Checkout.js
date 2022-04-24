import { useContext, useState } from "react"
import { CartContext } from "../Cart/CartContext"
import { figuresdb } from '../../firebase/config.js'
import { collection, addDoc, documentId, getDocs, Timestamp, writeBatch, query, where } from 'firebase/firestore'
import { Navigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Success } from "./Success"


const Checkout = () => {

    const { cart, cartTotal, emptyCart } = useContext(CartContext)
    // Datos
    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        tel: '',
        wsp: '',
        address: '',
        floor: '',
        type: 'Casa',
        cp: '',
        paymethod: '0',
        mpago: '',
        key: '',
        cardnumber: '',
        expiredate: '',
        cvv: '',
    })

    const handleInputchange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const orden = {
            items: cart,
            total: cartTotal(),
            buydate: Timestamp.fromDate(new Date()),
            buyer: {
                firstname: values.firstname,
                lastname: values.lastname,
                contact: {
                    email: values.email,
                    tel: values.tel,
                    wsp: values.wsp,
                },
                address: {
                    address: values.address,
                    floor: values.floor,
                    type: values.type,
                    cp: values.cp,
                },
                paymethod: values.paymethod,
                card: {
                    cardnumber: values.cardnumber,
                    expiredate: values.expiredate,
                    cvv: values.cvv,
                },
                mercadopago: values.mpago,
                criptkey: values.key,
            }
        }


        const batch = writeBatch(figuresdb)
        const productsRef = collection(figuresdb, 'productos')
        const ordersRef = collection(figuresdb, 'ordenes')

        const q = query(productsRef, where(documentId(), 'in', cart.map(prod => prod.id)))

        const productos = await getDocs(q)

        const outOfStock = []

        productos.docs.forEach(prod => {
            const findout = cart.find(found => found.id === prod.id)
            if (prod.data().stock >= findout.count) {
                batch.update(prod.ref, {
                    stock: prod.data().stock - findout.count
                })
            } else {
                outOfStock.push(findout)
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()
            addDoc(ordersRef, orden)
                .then((res) => {
                    setOrderId(res.id)
                    emptyCart()
                })
        } else {
            console.log(outOfStock)
            console.log('nanana')
        }


    }

    // Variantes de motion

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30,
        duration: 0.5,
    }
    const springOut = {
        //type: "spring",
        stiffness: .1,
        damping: 100,
        duration: 0.1,
    }

    // Funciones Alternativas de Pago

    const mPago = () => {
        return (
            <input className={cInput}
                name="mpago"
                value={values.mpago}
                onChange={handleInputchange}
                type={'email'}
                placeholder="Ingrese su email vinculado con MercadoPago"
            />
        )
    }

    const keyCript = () => {
        return (
            <input className={cInput}
                name="key"
                value={values.key}
                onChange={handleInputchange}
                type={'text'}
                autoComplete="off"
                readOnly
                placeholder="Aquí se mostrará su clave una vez firmada por Metamask"
            />
        )
    }

    // Tailwind Css


    // Checkout
    const cContainer = "flex flex-col h-screen px-12 items-center bg-white"
    const cTitle = "my-24 text-8xl color-black font-guy plusfonts"
    const cForm = "grid gap-2 grid-cols-4 w-full font-roboto p-12 bg-zinc-200 rounded-md  shadow-xl"
    const cInput = `mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:caret-sky-500
    disabled:bg-slate-300 disabled: text-slate-500 disabled: border-slate-200 disabled: shadow-none 
    invalid:border-pink-500 invalid:text-pink-600 
    focus:invalid:border-pink-500 focus:invalid:ring-pink-500 focus:invalid:caret-pink-600`
    const cButton = "w-fit mt-4 px-3 py-2 font-fredoka text-white bg-celeste hover:bg-blue-700 transition duration-300 rounded"

    // Fase de Transacción exitosa

    if (orderId) {
        return <Success id={orderId} />
    }

    if (cart.length === 0) {
        return <Navigate to='/' />
    }


    // Renderizado

    return (
        <motion.div className={cContainer}
            initial={{ scale: 5 }}
            whileInView={{ scale: 1 }}
            layout transition={spring}
        >
            <div className={cTitle}>Checkout</div>

            <form onSubmit={handleSubmit} className={cForm}>
                <fieldset className="col-span-2 mx-4">
                    <legend className="text-left">Datos personales</legend>
                    <input className={cInput}
                        name="firstname"
                        value={values.firstname}
                        onChange={handleInputchange}
                        type={'text'}
                        placeholder="Ingrese su/s nombre/s"
                    />
                    <input className={cInput}
                        name="lastname"
                        value={values.lastname}
                        onChange={handleInputchange}
                        type={'text'}
                        placeholder="Ingrese su/s apellido/s"
                    />
                </fieldset>
                <fieldset className="col-span-2 mx-4">
                    <legend className="text-left">Datos de contacto</legend>
                    <input className={cInput}
                        name="email"
                        value={values.email}
                        onChange={handleInputchange}
                        type={'email'}
                        placeholder="Ingrese su dirección de correo electrónico"
                    />
                    <fieldset className="flex gap-2">
                        <legend className="text-left">Teléfonos</legend>
                        <input className={cInput}
                            name="tel"
                            value={values.tel}
                            onChange={handleInputchange}
                            type={'tel'}
                            placeholder="Ingrese su número de teléfono"
                        />
                        <input className={cInput}
                            name="wsp"
                            value={values.wsp}
                            onChange={handleInputchange}
                            type={'tel'}
                            placeholder="Ingrese su número de celular/whatsapp"
                        />
                    </fieldset>
                </fieldset>
                <fieldset className="col-span-2 mx-4">
                    <legend>Domicilio</legend>
                    <select
                        name='type'
                        value={values.type}
                        onChange={handleInputchange}
                    >
                        <option value='Casa'>Casa</option>
                        <option value='Departamento'>Departamento</option>
                    </select>
                    <input className={cInput}
                        name="address"
                        value={values.address}
                        onChange={handleInputchange}
                        type={'text'}
                        placeholder="Ingrese la calle y número de su domicilio"
                    />
                    <fieldset className="flex gap-2">
                        <input className={cInput}
                            name="floor"
                            value={values.floor}
                            onChange={handleInputchange}
                            type={'text'}
                            placeholder="Nº de vivienda"
                        />
                        <input className={cInput}
                            name="cp"
                            value={values.cp}
                            onChange={handleInputchange}
                            type={'text'}
                            placeholder="Codigo Postal"
                        />
                    </fieldset>
                </fieldset>
                <fieldset className="col-span-2 mx-4">
                    <legend className="text-left">Forma de pago</legend>
                    <select
                        name="paymethod"
                        value={values.paymethod}
                        onChange={handleInputchange}
                    >
                        <option value='0'>VISA</option>
                        <option value='1'>Mastercard</option>
                        <option value='2'>American Express</option>
                        <option value='3'>Mercadopago</option>
                        <option value='4'>USDT(TRX)</option>
                    </select>
                    {values.paymethod === '3' && mPago()}
                    {values.paymethod === '4' && keyCript()}
                    <input className={cInput}
                        name="cardnumber"
                        value={values.cardnumber}
                        onChange={handleInputchange}
                        type={'number'}
                        autoComplete="off"
                        disabled={values.paymethod === '3' || values.paymethod === '4' ? true : false}
                        placeholder="Ingrese su número de tarjeta"
                    />
                    <label>Mes de Vencimiento</label>
                    <input className={cInput}
                        name='expiredate'
                        value={values.expiredate}
                        onChange={handleInputchange}
                        type={'month'}
                        min='2022-05'
                        max='2040-01'
                        size={'8'}
                        disabled={values.paymethod === '3' || values.paymethod === '4' ? true : false}
                        placeholder="2022-06"
                    />
                    <label></label>
                    <input className={cInput}
                        name='cvv'
                        value={values.cvv}
                        onChange={handleInputchange}
                        type={'password'}
                        autoComplete="off"
                        maxLength={values.paymethod === '2' ? '4' : '3'}
                        size={'4'}
                        disabled={values.paymethod === '3' || values.paymethod === '4' ? true : false}
                        placeholder={values.paymethod === '2' ? "Ingrese su CCV (4 dígitos)" : "Ingrese su CCV (3 dígitos)"}
                    />
                </fieldset>
                <fieldset className="col-span-4 h-full mt-4 justify-self-center ">
                    <motion.button
                        className={cButton}
                        type="submit"
                        whileTap={{ scale: 1250 }}
                        layout transition={springOut}
                    >Enviar</motion.button>
                </fieldset>
            </form>

        </motion.div>


    )


}

export default Checkout