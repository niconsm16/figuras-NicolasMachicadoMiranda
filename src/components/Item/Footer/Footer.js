import { FaWhatsapp, FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa"
import { Copyright, Email, Help, Newsletter, Privacy, Subscribe } from "./FooterStrings"



export const Footer = () => {



    return (
        <div className="flex relative items-center text-sm justify-around bottom-0 h-20 w-full font-book text-white antialiased fonts bg-black">
            <div className="">
                <div className="flex pb-1 justify-around text-xl"><FaWhatsapp className="cursor-pointer transition hover:text-[#28D146]" /><FaInstagram className="cursor-pointer transition duration-500 rounded hover:text-black hover:bg-gradient-to-tr hover:from-[#FCAF45] hover:via-[#F77737] hover:via-[#FD1D1D] hover:via-[#833AB4] hover:to-[#405DE6] " /><FaFacebookSquare className="cursor-pointer transition hover:text-[#4267B3]" /><FaTwitter className="cursor-pointer transition hover:text-[#1D9BF0]" /></div>
                <div>{Copyright}</div>
            </div>
            <div className="text-center w-1/4">
                <div className="mb-1">{Newsletter}</div>
                <form method="" action="POST">
                    <input className="w-2/3 px-2 text-black py-[0.05em] rounded" placeholder={`${Email}`} />
                    <button className="px-2 py-0.5 mx-1 rounded bg-gradient-to-b from-zinc-700 to-zinc-800 hover:from-red-700 hover:to-red-900">{Subscribe}</button>
                </form>
            </div>
            <div className="text-right">
                <div className="pb-0.5 cursor-pointer transition hover:text-amarillo">{Help}</div>
                <div className="cursor-pointer transition hover:text-amarillo">{Privacy}</div>
            </div>
        </div>
    )
}