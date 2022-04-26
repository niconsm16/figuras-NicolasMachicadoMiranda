import { FaWhatsapp, FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa"
import { Copyright, Email, Help, Newsletter, Privacy, Subscribe } from "./FooterStrings"



export const Footer = () => {

    // Tailwind Class

    const cContainer = "flex md:h-auto md:py-4 relative items-center text-sm justify-around bottom-0 h-20 w-full font-book text-white antialiased fonts bg-black"
    const cSocial = "md:mb-2 flex pb-1 justify-around text-xl"
    const cWsp = "cursor-pointer transition hover:text-[#28D146]"
    const cIg = "cursor-pointer transition duration-500 rounded hover:text-black hover:bg-gradient-to-tr hover:from-[#FCAF45] hover:via-[#F77737] hover:via-[#FD1D1D] hover:via-[#833AB4] hover:to-[#405DE6] "
    const cFb = "cursor-pointer transition hover:text-[#4267B3]"
    const cTw = "cursor-pointer transition hover:text-[#1D9BF0]"
    const cNewsBox = "text-center w-2/4"
    const cInput = "md:my-2 w-48 px-2 text-black py-[0.05em] rounded"
    const cSubscribe = "md:hidden px-2 py-0.5 mx-1 rounded bg-gradient-to-b from-zinc-700 to-zinc-800 hover:from-red-700 hover:to-red-900"
    const cHelp = "md:hidden pb-0.5 cursor-pointer transition hover:text-amarillo"
    const cPrivacy = "md:hidden cursor-pointer transition hover:text-amarillo"

    // Render

    return (
        <div className={cContainer}>
            <div>
                <div className={cSocial}>
                    <FaWhatsapp className={cWsp} />
                    <FaInstagram className={cIg} />
                    <FaFacebookSquare className={cFb} />
                    <FaTwitter className={cTw} /></div>
                <div>{Copyright}</div>
            </div>
            <div className={cNewsBox}>
                <div className="mb-1 md:hidden">{Newsletter}</div>
                <form method="" action="POST">
                    <input className={cInput} placeholder={`${Email}`} />
                    <button className={cSubscribe}>{Subscribe}</button>
                </form>
            </div>
            <div className="text-right">
                <div className={cHelp}>{Help}</div>
                <div className={cPrivacy}>{Privacy}</div>
            </div>
        </div>
    )
}