import waiting from '../../assets/img/waiting.gif';


const WaitItem = (() => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen">
            <img src={waiting} alt='' className="h-62 w-70" />
            <p className="text-3xl font-roboto m-6">Aguarde...</p>
        </div>
    )
})

export default WaitItem