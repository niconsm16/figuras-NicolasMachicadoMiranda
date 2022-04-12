import React, { useCallback, useEffect, useState } from 'react';
// MOCK import { getItem, figures } from "../../../temp/Productos";
import ItemList from './ItemList';
import WaitItem from '../../WaitScenes/WaitList';
import { useParams } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { figuresdb } from '../../../firebase/config';
import HomeBanner from '../../Home/HomeBanner';


export const ItemListContainer = () => {

    const [products, setProducts] = useState([]) // Seteo el estado inicial vacío en array
    const [completed, task] = useState(false)

    const { category, solicitados } = useParams()

    const goTo = useCallback((db) => {
        if (solicitados) {
            return query(db, where('stock', '<=', 2));
        }
        if (category) {
            return query(db, where('category', '==', category));
        }
    }, [category, solicitados])

    useEffect(() => { // Mantenemos vigilado todo el tiempo los eventos para actualizar la data una vez llegada
        const figuresRef = collection(figuresdb, 'productos')   // Armar Referencia
        const quest = goTo(figuresRef) || figuresRef
        getDocs(quest).then(res => {
            const items = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            setProducts(items)
            task(true)
        })
            .catch((err) => {
                console.log('No se pudo recibir la información: ', err)
            })
    }, [goTo])

    // Render

    return (
        <>
            {completed
                ? <>
                    {window.location.pathname === "/" && <HomeBanner className="h-96 overflow-hidden" />}
                    <ItemList products={products} />
                    <Footer /></>
                : <WaitItem />}
        </>
    )
}
