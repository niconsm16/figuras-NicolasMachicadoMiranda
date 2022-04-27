import { WaitASec } from "./WaitStrings"
import waiting from '../../assets/img/waiting.webp'

const WaitItem = (() => {

    // Tailwind Class

    const cContainer = "flex flex-col justify-center items-center w-full h-full  opacity-0 animate-disappear"
    const cImg = "absolute h-full w-full top-0 object-cover"
    const cText = "absolute md:relative top-[2em] text-5xl text-white text-shadow-fort font-guy m-6 z-10"

    // Render

    return (
        <div className={cContainer}>
            <img src={waiting} alt='' className={cImg} />
            <p className={cText}>{WaitASec}</p>
        </div>
    )
})

export default WaitItem