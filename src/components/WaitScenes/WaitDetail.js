import waiting from '../../assets/img/waiting.gif';
import { Wait } from './WaitStrings';


const WaitItem = (() => {
    return (
        <div className="flex flex-col bg-zinc-200 justify-center items-center w-full h-screen">
            <img src={waiting} alt='' className="h-62 w-70" />
            <p className="text-3xl font-guy m-6">{Wait}</p>
        </div>
    )
})

export default WaitItem