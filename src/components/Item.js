import React from "react";


const Item = ({ id, url, name, details, price }) => {

    return (

        <div className="bg-zinc-100 hover:bg-zinc-200 p-6 pb-4 m-2 rounded-2xl shadow-xl hover:shadow-superhover font-fredoka antialiased text-xl transition ease-in cursor-pointer hover:scale-105">
            <img src={url} alt='saint seiya' className="w-60 h-80 m-auto object-contain" />
            <h2 className="mt-2"><strong>{name}</strong></h2>
            <h3 className=" bg-zinc-200 py-1">{details}</h3>
            <h2 className="font-bakbak bg-zinc-300">{price} USD</h2>
        </div>

    )
}

export default Item