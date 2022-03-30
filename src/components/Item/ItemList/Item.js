import React from "react";


const Item = ({ img, name, model, category, price }) => {

    return (
        <div className="bg-[#f9f9f9] hover:bg-zinc-100 p-6 pb-4 m-2 rounded-lg hover:shadow-superhover font-fredoka antialiased text-xl transition ease-in cursor-pointer">
            <img src={img} alt={name} className="w-60 h-80 m-auto object-contain" />
            <h2 className="mt-2"><strong>{category} {model}</strong></h2>
            <h3 className=" bg-zinc-200 py-1">{name}</h3>
            <h2 className="font-bakbak bg-zinc-300">{price},00 USD</h2>
        </div>

    )
}

export default Item