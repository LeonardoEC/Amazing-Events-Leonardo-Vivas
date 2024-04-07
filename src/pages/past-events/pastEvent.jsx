

import './pastEventStyle.css'

import SEARCH from '../../shared/search/search'
import CARD from '../../components/card/card'

const PASTEVENT = () =>{

    const page = {
        title:"Past Events",
        page:"past"
    }

    return(
        <>
            <SEARCH title={page.title} />
            <CARD page={page.page} />
        </>
    )
}

export default PASTEVENT