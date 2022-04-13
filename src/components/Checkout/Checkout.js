import { useContext, useState } from "react"
import { CartContext } from "../Cart/CartContext"
import { figuresdb } from '../../firebase/config.js'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { Navigate, Link } from "react-router-dom"
import { motion } from "framer-motion"


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

    const handleSubmit = (e) => {
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

        const ordersRef = collection(figuresdb, 'ordenes')
        addDoc(ordersRef, orden)
            .then((res) => {
                setOrderId(res.id)
                emptyCart()
            })
    }

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30,
        duration: 0.5,
    };

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

    // Concretado
    const cSuccessContainer = "flex flex-col h-screen justify-around pt-28 px-12 items-center bg-lime-300"
    const cSuccessTitle = "font-fredoka text-8xl text-black plusfonts animate-bounce"
    const cIdMessage = 'my-4 px-6 pt-2 pb-3 bg-black text-white text-2xl rounded-full z-10'
    const cWave = 'absolute bottom-0 w-full bg-transparent'
    const cBack = "py-2 px-4 bg-amarillo rounded font-bold hover:bg-black hover:text-amarillo transition duration-300 z-10"
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


    if (orderId) {
        return <div className={cSuccessContainer}>
            <h2 className={cSuccessTitle}>Transacción exitosa!</h2>

            <h2 className={cIdMessage}>Este es el ID de tu transacción: <b>{orderId}</b></h2>

            <Link to='/' className={cBack}>Volver al inicio</Link>
            <div className={`${cWave} fill-lime-400`}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" >
                    <path d="M-40.34,82.41 C157.16,-77.44 207.95,126.81 573.08,-18.23 L533.01,165.30 L0.00,150.00 Z" >
                    </path>
                </svg>
            </div>
            <div className={`${cWave} fill-lime-500`}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" >
                    <path d="M-47.11,173.20 C141.92,-87.31 231.65,124.84 574.77,31.09 L533.01,165.30 L0.00,150.00 Z" >
                    </path>
                </svg>
            </div>
        </div>
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
                    <button type="submit" className={cButton}>Enviar</button>
                </fieldset>
            </form>

        </motion.div>


    )


}

export default Checkout