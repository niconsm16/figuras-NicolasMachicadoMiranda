import React from "react";


const Item = ({ id, img, name, model, details, price }) => {

    return (

        <div className="bg-zinc-100 hover:bg-zinc-200 p-6 pb-4 m-2 rounded-2xl shadow-xl hover:shadow-superhover font-fredoka antialiased text-xl transition ease-in cursor-pointer">
            <img src={img} alt={name} className="w-60 h-80 m-auto object-contain" />
            <h2 className="mt-2"><strong>{name} {model}</strong></h2>
            <h3 className=" bg-zinc-200 py-1">{details}</h3>
            <h2 className="font-bakbak bg-zinc-300">{price},00 USD</h2>
        </div>

    )
}

export default Item