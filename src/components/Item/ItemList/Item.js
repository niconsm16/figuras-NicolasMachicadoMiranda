import React from "react";
import { Currency } from "../ItemDetail/ItemDetailStrings";
import { motion } from "framer-motion";

const Item = ({ img, name, model, category, price }) => {

    return (
        <div className="min-w-[16rem] pb-0 m-2 bg-[#f9f9f9] hover:bg-gradient-to-t hover:from-zinc-300 hover:to-white hover:text-white rounded-lg hover:shadow-superhover font-fredoka antialiased text-xl hover:animate-anicolor2  hover:font-bold transition duration-200 ease-in cursor-pointer">
            <motion.h2 className="mt-2 px-6 rounded-t-lg"
                whileInView={{
                    background: [
                        "linear-gradient(to right, #8b5cf6 -200%, #6945bc -100%, #8b5cf6 0%, #6945bc 100%)",
                        "linear-gradient(to right, #8b5cf6 -100%, #6945bc 0%, #8b5cf6 100%, #6945bc 200%)",
                        "linear-gradient(to right, #8b5cf6 0%, #6945bc 100%, #8b5cf6 200%, #6945bc 300%)",
                    ],
                }}
                transition={{
                    background: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        from:
                            "linear-gradient(to right, #8b5cf6 -200%, #6945bc -100%, #8b5cf6 0%, #6945bc 100%)",
                    },
                }}
            >
                <strong>{category} {model}</strong>
            </motion.h2>
            <img src={img} alt={name} className="w-60 h-80 m-auto px-1 mt-2 object-cover rounded-lg" />
            <h3 className=" py-1 text-black">{name}</h3>
            <h2 className="font-bakbak text-zinc-100 bg-black font-normal rounded-b-lg">{price},00 {Currency}</h2>
        </div>

    )
}

export default Item