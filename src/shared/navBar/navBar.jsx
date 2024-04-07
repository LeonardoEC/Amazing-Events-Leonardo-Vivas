import { Link } from "react-router-dom"

import './navBarStyle.css'


const NAVBAR = () => {

    const pages = [
        { title: "Home", to: "/home" },
        { title: "Upcoming Events", to: "/upcomingEvents" },
        { title: "Past Events", to: "/pastEvent" },
        { title: "Stats", to: "url" },
        { title: "Contact", to: "url" },
    ]

    return(
        <div className='nav__container'>
            {
                pages.map((item) => (
                    <Link key={item.title} className='nav__btn' to={item.to}>{item.title}</Link>
                ))
            }
        </div>
    )
}

export default NAVBAR;