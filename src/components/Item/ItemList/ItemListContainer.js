import React, { useEffect, useState } from 'react';
// MOCK import { getItem, figures } from "../../temp/Productos";
import ItemList from './ItemList';
import WaitItem from '../../WaitScenes/WaitList';
import { useParams } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { figuresdb } from '../../../firebase/config';


export const ItemListContainer = () => {

    let [products, setProducts] = useState([]) // Seteo el estado inicial vacío en array
    let [completed, task] = useState(false)

    const { category } = useParams()

    useEffect(() => { // Mantenemos vigilado todo el tiempo los eventos para actualizar la data una vez llegada
        // Armar Referencia
        const figuresRef = collection(figuresdb, 'productos')
        // Referencia de productos        
        const q = category
            ? query(figuresRef, where('category', '==', category))
            : figuresRef
        console.log(q)
        // LLamar async a la ref
        getDocs(q)
            .then(res => {
                const items = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                console.log(items)


                setProducts(items)
                task(true)
            })

            // getItem(figures) // Ejecuto la demora simulando un servidor con el array 'figures'
            //     .then((res) => {
            //         category === undefined
            //             ? setProducts(res)
            //             : setProducts(// Actualizo valores con los cargados en la línea de arriba
            //                 res.filter(n => (n.category === category)))


            .catch((err) => {
                console.log('No se pudo recibir la información: ', err)
            })
    }, [category])

    // Render

    return (
        <>
            {completed ? <><ItemList products={products} /><Footer /></> : <WaitItem />}

        </>
    )
}
