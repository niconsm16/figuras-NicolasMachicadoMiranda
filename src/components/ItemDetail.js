import React, { useEffect, useState } from "react";
import { getItem, figures } from "./Productos";
import waiting from '../assets/img/waiting.gif';
import { ItemCondition } from "./ItemDetailElements";

export const ItemDetailContainer = ({ select }) => {

    let [details, setDetails] = useState([])
    let [actualImg, setImg] = useState('')

    useEffect(() => {
        getItem(figures)
            .then(() => {
                setDetails(figures)
                setImg(figures[select].url)
            })
            .catch((err) => {
                console.log('no se pudo recibir el detalle', err)
            })
    }, [])


    try {

        let condition = details[select].condition === 0 ? 'Nuevo' : 'Usado'
        return (
            <div div className="flex w-full h-auto justify-center" >
                <div className="flex w-11/12 h-auto justify-around px-6 py-8 justify-center bg-gradient-to-t from-zinc-200 to-zinc-100">
                    <div className="m-1">
                        {
                            details[select].img.map((img, index) => {
                                return (<img key={index} src={img} onClick={() => setImg(img)} alt='altimagen' className="h-24 w-16 m-1 object-contain cursor-pointer" />)
                            })
                        }
                    </div>
                    <div className="flex  flex-col items-center w-1/2">
                        <img src={actualImg} alt='img url' className="h-auto" />
                    </div>
                    <div className="flex flex-col items-end w-1/4 justify-items-center text-right">
                        <img src={details[select].logo} alt='img url' className="h-16 w-full mt-2 mb-6 object-contain justify-self-end" />
                        <h2 className="font-fredoka pr-1 text-md bg-gradient-to-r from-transparent to-amarillo">{details[select].name}</h2>
                        <h3 className="font-fredoka pr-1 text-3xl">{details[select].details}</h3>
                        <h3 className="text-2xl pr-1 font-bakbak bg-gradient-to-r from-transparent to-violet-500">{details[select].price},00 USD</h3>
                        <div className="flex flex-col items-end my-2">
                            <p>Marca: {(details[select].mark).toUpperCase()}</p>
                            <p>Año: {details[select].year}</p>
                            <p>Versión: {details[select].version}</p>
                            <ItemCondition cond={details[select].condition}>{condition}</ItemCondition>
                            <p>Stock: {details[select].stock} unidades</p>
                        </div>
                        <div className="bg-zinc-100 rounded py-2 px-3">
                            <p className="font-bold pb-1">Descripción:</p>
                            <p className="text-sm">{details[select].description}</p>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
    catch {
        return (
            <div className="flex flex-col justify-center items-center w-full h-screen">
                <img src={waiting} alt='' className="h-62 w-70" />
                <p className="text-3xl font-roboto m-6">Aguarde...</p>
            </div>
        )
    }

}