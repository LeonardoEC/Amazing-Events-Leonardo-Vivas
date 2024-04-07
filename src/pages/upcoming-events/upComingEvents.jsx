import './upComingEventsStyle.css'

import SEARCH from '../../shared/search/search'
import CARD from '../../components/card/card'

const UPCOMINGEVENTS = () => {

    const page = {
        title:"Up Coming Events",
        page:"upcoming"
    }


    return (
        <>
            <SEARCH title={page.title} />
            <CARD page={page.page} />
        </>
    )
}

export default UPCOMINGEVENTS