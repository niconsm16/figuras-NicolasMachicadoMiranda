import HomeBanner from "./HomeBanner"
import { ItemListContainer } from "../Item/ItemList/ItemListContainer"


// function pepe() {
//     setTimeout(() => { return }, 1000)
// }

const Home = () => {

    return (
        <>
            <HomeBanner className="h-96 overflow-hidden" />
            <ItemListContainer />
        </>
    )
}

export default Home