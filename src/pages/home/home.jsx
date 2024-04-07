
import SEARCH from "../../shared/search/search"
import CARD from "../../components/card/card"
import HOMECOMPONENT from "../../components/homeComponent/homeComponent"

const HOME = () => {

    const page = {
        title: "Home",
        page: "home"
    }

    return (
        <div>
            <HOMECOMPONENT />
            <SEARCH />
            <CARD page={page.page} />
        </div>
    )
}

export default HOME