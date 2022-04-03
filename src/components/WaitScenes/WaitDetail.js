import waiting from '../../assets/img/waiting.gif';
import { Wait } from './WaitStrings';


const WaitItem = (() => {

    // Tailwind Class

    const cContainer = "flex flex-col bg-zinc-200 justify-center items-center w-full h-screen"
    const cText = "text-3xl font-guy m-6"

    // Render

    return (
        <div className={cContainer}>
            <img src={waiting} alt='' className="h-62 w-70" />
            <p className={cText}>{Wait}</p>
        </div>
    )
})

export default WaitItem