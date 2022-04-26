import { useContext, useState } from "react"
import { CartContext } from "../Cart/CartContext"
import { figuresdb } from '../../firebase/config.js'
import { collection, addDoc, documentId, getDocs, Timestamp, writeBatch, query, where } from 'firebase/firestore'
import { Navigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Success } from "./Success"
import { SiVisa, SiAmericanexpress } from "react-icons/si"
import { FaCcMastercard, FaCcDiscover, FaCcJcb, FaBitcoin } from "react-icons/fa"
import { AddressData, Buy, CellInput, ContactData, EmailInput, LastNameInput, NameInput, PersonalData, TelInput, TelLabel, Home, Dept, FloorData, City, PaymentData, CardInput, Zip, CVV, CVValt, ExpDate, Mpago, Metamask, CreditCard, MercadoPago, USDT, WarningLegend, OutOfStockLegend, All } from "./CheckoutStrings"
import expressions from "./CheckoutExpressions"
import { spring, springOut } from "./CheckoutMotion"
import { ItemContainerStyle } from "./CheckoutElements"
import CheckNames from "./CheckNames"

const Checkout = () => {

    const { cart, cartTotal, emptyCart } = useContext(CartContext) // Carrito
    const [stock, setStock] = useState(true) // Alertas
    const [orderId, setOrderId] = useState(null) // Orden de compra
    const [validation, setValidation] = useState({ // Validaciones
        firstname: null,
        lastname: null,
        email: null,
        tel: null,
        wsp: null,
        address: null,
        city: null,
        type: true,
        cp: null,
        paymethod: true,
        mpago: null,
        key: null,
        cardnumber: null,
        expiredate: null,
        cvv: null,
    })
    const [values, setValues] = useState({ // Valores
        firstname: '',
        lastname: '',
        email: '',
        tel: '',
        wsp: '',
        address: '',
        city: '',
        type: 'Casa',
        cp: '',
        paymethod: '0',
        mpago: '',
        key: '',
        cardnumber: '',
        expiredate: '',
        cvv: '',
    })
    const [errorForm, setErrorForm] = useState([0])
    const [badForm, setBadForm] = useState(false)

    const validateForm = (e) => {

        if ((e.target.name === "firstname") ||
            (e.target.name === "lastname") ||
            (e.target.name === "address") ||
            (e.target.name === "city")) {
            expressions.fourletters.test(e.target.value)
                ? setValidation({ ...validation, [e.target.name]: true })
                : setValidation({ ...validation, [e.target.name]: false })
        }
        if ((e.target.name === "email") ||
            (e.target.name === "mpago")) {
            expressions.email.test(e.target.value)
                ? setValidation({ ...validation, [e.target.name]: true })
                : setValidation({ ...validation, [e.target.name]: false })
        }
        if ((e.target.name === 'tel') ||
            (e.target.name === 'wsp')) {
            expressions.tel.test(e.target.value)
                ? setValidation({ ...validation, [e.target.name]: true })
                : setValidation({ ...validation, [e.target.name]: false })
        }
        if (e.target.name === 'cp') {
            expressions.lesseight.test(e.target.value)
                ? setValidation({ ...validation, [e.target.name]: true })
                : setValidation({ ...validation, [e.target.name]: false })
        }
        if (e.target.name === 'cardnumber') {
            expressions.cardnumber.test(e.target.value)
                ? setValidation({ ...validation, [e.target.name]: true })
                : setValidation({ ...validation, [e.target.name]: false })
        }
        if (e.target.name === 'cvv') {
            if (values.cardnumber[0] === '3') {
                expressions.fournumbers.test(e.target.value)
                    ? setValidation({ ...validation, [e.target.name]: true })
                    : setValidation({ ...validation, [e.target.name]: false })
            } else {
                expressions.threenumbers.test(e.target.value)
                    ? setValidation({ ...validation, [e.target.name]: true })
                    : setValidation({ ...validation, [e.target.name]: false })
            }
        }
        if (e.target.name === 'paymethod') {
            Number(values.paymethod) < 3
                ? setValidation({ ...validation, [e.target.name]: true })
                : setValidation({ ...validation, [e.target.name]: false })
        }
        if (e.target.name === 'type') {
            values.type === 'Casa' || values.type === 'Departamento'
                ? setValidation({ ...validation, [e.target.name]: true })
                : setValidation({ ...validation, [e.target.name]: false })
        }
        if (e.target.name === 'expiredate') {
            expressions.expdate.test(e.target.value)
                ? setValidation({ ...validation, [e.target.name]: true })
                : setValidation({ ...validation, [e.target.name]: false })
        }

        let namesFix = []

        if (values.paymethod === '0') {
            validation.mpago = true
            validation.key = true
        }
        if (values.paymethod === '1') {
            validation.key = true
            validation.cardnumber = true
            validation.expiredate = true
            validation.cvv = true
        }
        if (values.paymethod === '2') {
            validation.mpago = true
            validation.key = true
            validation.cardnumber = true
            validation.expiredate = true
            validation.cvv = true
        }

        const mapForm = new Map(Object.entries(validation))
        for (let check of mapForm) { !Boolean(check[1]) && namesFix.push(check[0]) }
        setErrorForm(CheckNames(namesFix))
    }

    const handleInputchange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setBadForm(true)
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
                    city: values.city,
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

        const queryDB = query(productsRef, where(documentId(), 'in', cart.map(prod => prod.id)))

        const products = await getDocs(queryDB)
        const outOfStock = []

        products.docs.forEach(prod => {
            const findout = cart.find(found => found.id === prod.id)
            if (prod.data().stock >= findout.count) {
                batch.update(prod.ref, {
                    stock: prod.data().stock - findout.count
                })
            } else {
                outOfStock.push(findout)
            }
        })

        if ((outOfStock.length === 0) && (errorForm.length === 0)) {
            batch.commit()
            addDoc(ordersRef, orden)
                .then((res) => {
                    setOrderId(res.id)
                    emptyCart()
                })
        } else {
            setStock(outOfStock)
        }
    }


    // Funciones Alternativas de Pago

    const iconPayment = () => {

        if (values.paymethod === '0') {
            switch (values.cardnumber[0]) {
                case ('4'):
                    return <SiVisa className="text-blue-800 bg-white rounded-sm" />
                case ('5'):
                    return <FaCcMastercard className="text-yellow-500 bg-transparent rounded-sm" />
                case ('3'):
                    return <SiAmericanexpress className="text-[#016FD0] bg-white rounded-sm" />
                case ('6'):
                    return <FaCcDiscover className="text-[#E55C20] bg-white rounded-sm" />
                case ('7'):
                    return <FaCcJcb className="text-black bg-white rounded-sm" />
                default:
                    return
            }
        }
        if (values.paymethod === '1') {
            return <img src="https://getlogovector.com/wp-content/uploads/2021/09/mercado-pago-logo-vector.png" className="w-[35px]" alt="mpago" />
        }
        if (values.paymethod === '2') {
            return <FaBitcoin className="text-yellow-600 bg-white rounded-full" />
        }
    }

    const card = (others, AExpress) => {
        return (values.cardnumber[0] === '3')
            ? AExpress
            : others
    }

    const mPago = () => {
        return (
            <input className={cInput}
                name="mpago"
                value={values.mpago}
                onChange={handleInputchange}
                type={'email'}
                placeholder={Mpago}
                onBlur={validateForm}
                onKeyUp={validateForm}
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
                placeholder={Metamask}
                onBlur={validateForm}
                onKeyUp={validateForm}
            />
        )
    }

    // Tailwind Css

    const cContainer = "flex flex-col min-h-screen max-h-full px-12 md:px-4 items-center"
    const cTitle = "my-24 text-8xl md:text-6xl text-white font-guy plusfonts"
    const cForm = "grid gap-2 grid-cols-4 w-full font-roboto p-12 md:px-4 mb-4 bg-neutral-100 text-black rounded-md shadow-xl"
    const cFields = "col-span-2 md:col-span-4 mx-4 md:mx-0"
    const cInput = `mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:caret-sky-500
    disabled:bg-slate-300 disabled: text-slate-500 disabled: border-slate-200 disabled: shadow-none 
    invalid:border-pink-500 invalid:text-pink-600 
    focus:invalid:border-pink-500 focus:invalid:ring-pink-500 focus:invalid:caret-pink-600`
    const cButton = "w-fit mt-4 px-3 py-2 font-fredoka text-white bg-black hover:bg-black hover:text-amarillo transition duration-300 rounded"
    const cIconPayment = "flex w-1/2 justify-end items-center"
    const cFieldBuy = "col-span-4 h-full mt-4 justify-self-center "
    const cOutOfStock = "flex flex-col py-2 justify-center items-center col-span-4 bg-neutral-900 text-white rounded mb-4 transition duration-300 border-yellow-400 border-2"
    const cOutOfStockItems = "flex items-center  bg-black text-white rounded px-2 mx-2 py-2 font-bakbak border-neutral-700 border-2"
    const cWarning = "flex flex-col py-2 md:text-center  justify-center items-center col-span-4 bg-red-600 text-white rounded mb-4 transition duration-300"

    // Fase de Transacción exitosa

    if (orderId) {
        return <Success id={orderId} />
    }

    if (cart.length === 0) {
        return <Navigate to='/' />
    }

    const itemsOut = (list) => {

        const products = list.map(prod =>
            <div className={cOutOfStockItems}
                key={prod.id}>
                <img src={prod.url} alt={prod.name} className="w-16" />
                <div className="mx-2">
                    <div>Producto: {prod.name}</div>
                    <div>Precio: {prod.price}</div>
                    <div>Cantidad: {prod.count}</div>
                </div>
            </div>
        )
        return products
    }

    // Renderizado

    return (
        <ItemContainerStyle>
            <motion.div className={cContainer}
                initial={{ scale: 5 }}
                whileInView={{ scale: 1 }}
                layout transition={spring}
            >
                <div className={cTitle}>Checkout</div>
                <form onSubmit={handleSubmit} className={cForm}>
                    {/* Warning Form */}
                    {((errorForm.length > 0) && (badForm))
                        ? <div className={cWarning}>
                            <div>
                                {WarningLegend}
                            </div>
                            <div className={cWarning}>
                                {errorForm.map((input, index) =>
                                    <div key={index} className="mx-1">{input === 0 ? All : input}</div>)}
                            </div>
                        </div>
                        : <></>
                    }
                    {/* Warning Stock */}
                    {stock.length > 0 &&
                        <div className={cOutOfStock}>
                            <div className="flex my-1">
                                {itemsOut(stock)}
                            </div>
                            {OutOfStockLegend}
                        </div>}
                    {/* Personal Data */}
                    <fieldset className={cFields}>
                        <legend className="text-left">{PersonalData}</legend>
                        <input className={cInput}
                            name="firstname"
                            value={values.firstname}
                            onChange={handleInputchange}
                            type={'text'}
                            placeholder={NameInput}
                            onBlur={validateForm}
                            onKeyUp={validateForm}
                        />
                        <input className={cInput}
                            name="lastname"
                            value={values.lastname}
                            onChange={handleInputchange}
                            type={'text'}
                            placeholder={LastNameInput}
                            onBlur={validateForm}
                            onKeyUp={validateForm}
                        />
                    </fieldset>
                    {/* Contact Data */}
                    <fieldset className={cFields}>
                        <legend className="text-left">{ContactData}</legend>
                        <input className={cInput}
                            name="email"
                            value={values.email}
                            onChange={handleInputchange}
                            type={'email'}
                            placeholder={EmailInput}
                            onBlur={validateForm}
                            onKeyUp={validateForm}
                        />
                        <fieldset className="flex gap-2">
                            <legend className="text-left">{TelLabel}</legend>
                            <input className={cInput}
                                name="tel"
                                value={values.tel}
                                onChange={handleInputchange}
                                type={'tel'}
                                placeholder={TelInput}
                                onBlur={validateForm}
                                onKeyUp={validateForm}
                            />
                            <input className={cInput}
                                name="wsp"
                                value={values.wsp}
                                onChange={handleInputchange}
                                type={'tel'}
                                placeholder={CellInput}
                                onBlur={validateForm}
                                onKeyUp={validateForm}
                            />
                        </fieldset>
                    </fieldset>
                    {/* Address Data */}
                    <fieldset className={cFields}>
                        <div className="flex justify-between">
                            <legend>{AddressData}</legend>
                            <select className="text-black"
                                name='type'
                                value={values.type}
                                onChange={handleInputchange}
                                onBlur={validateForm}
                                onKeyUp={validateForm}
                            >
                                <option value='Casa'>{Home}</option>
                                <option value='Departamento'>{Dept}</option>
                            </select>
                        </div>
                        <input className={cInput}
                            name="address"
                            value={values.address}
                            onChange={handleInputchange}
                            type={'text'}
                            placeholder={FloorData}
                            onBlur={validateForm}
                            onKeyUp={validateForm}
                        />
                        <fieldset className="flex gap-2">
                            <input className={cInput}
                                name="city"
                                value={values.city}
                                onChange={handleInputchange}
                                type={'text'}
                                placeholder={City}
                                onBlur={validateForm}
                                onKeyUp={validateForm}
                            />
                            <input className={cInput}
                                name="cp"
                                value={values.cp}
                                onChange={handleInputchange}
                                type={'text'}
                                placeholder={Zip}
                                onBlur={validateForm}
                                onKeyUp={validateForm}
                            />
                        </fieldset>
                    </fieldset>
                    {/* Payment */}
                    <fieldset className={cFields}>
                        <div className="flex justify-between">
                            <legend className="text-left">{PaymentData}</legend>
                            <div className={cIconPayment}>
                                {iconPayment()}
                            </div>
                            <select className="text-black"
                                name="paymethod"
                                value={values.paymethod}
                                onChange={handleInputchange}
                                onBlur={validateForm}
                                onKeyUp={validateForm}
                            >
                                <option value='0'>{CreditCard}</option>
                                <option value='1'>{MercadoPago}</option>
                                <option value='2'>{USDT}</option>
                            </select>
                        </div>

                        {values.paymethod === '1' && mPago()}
                        {values.paymethod === '2' && keyCript()}
                        <input className={cInput}
                            name="cardnumber"
                            value={values.cardnumber}
                            onChange={handleInputchange}
                            type={'number'}
                            autoComplete="off"
                            disabled={values.paymethod === '1' || values.paymethod === '2' ? true : false}
                            placeholder={CardInput}
                            onBlur={validateForm}
                            onKeyUp={validateForm}
                        />
                        <label>{ExpDate}</label>
                        <input className={cInput}
                            name='expiredate'
                            value={values.expiredate}
                            onChange={handleInputchange}
                            type={'month'}
                            min='2022-05'
                            max='2040-01'
                            size={'8'}
                            disabled={values.paymethod === '1' || values.paymethod === '2' ? true : false}
                            placeholder="2022-06"
                            onBlur={validateForm}
                            onKeyUp={validateForm}
                        />
                        <label></label>
                        <input className={cInput}
                            name='cvv'
                            value={values.cvv}
                            onChange={handleInputchange}
                            type={'password'}
                            autoComplete="off"
                            maxLength={values.paymethod === '0' ? card('3', '4') : 0}
                            size={'4'}
                            disabled={values.paymethod === '1' || values.paymethod === '2' ? true : false}
                            placeholder={values.paymethod === '0' ? card(CVV, CVValt) : ''}
                            onBlur={validateForm}
                            onKeyUp={validateForm}
                        />
                    </fieldset>
                    {/* Buy */}
                    <fieldset className={cFieldBuy}>
                        <motion.button
                            className={cButton}
                            type="submit"
                            whileTap={{ scale: 1250 }}
                            layout transition={springOut}
                        >{Buy.toUpperCase()}</motion.button>
                    </fieldset>
                </form>
            </motion.div>
        </ItemContainerStyle>
    )
}

export default Checkout