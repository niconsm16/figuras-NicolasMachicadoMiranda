import HomeBanner from "./HomeBanner"
import { ItemListContainer } from "../Item/ItemList/ItemListContainer"


const Home = () => {

    return (
        <>
            <HomeBanner className="h-[68.5vh] overflow-hidden" />
            <ItemListContainer />
        </>
    )

}

export default Home