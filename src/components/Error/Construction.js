export const Construction = () => {

    const cError = 'absolute top-0 m-[25%_25%] plusfonts text-white text-center font-guy'

    return (
        <div className="h-screen w-full flex content-center justify-center bg-black">
            <img src="https://i.etsystatic.com/6782226/r/il/402b87/701495995/il_794xN.701495995_em32.jpg" alt="soon" />
            <div className={cError}>
                <h1 className="text-8xl">Ups!</h1>
                <h2 className="text-6xl">Pagina en Construcción!</h2>
            </div>
        </div>
    )
}