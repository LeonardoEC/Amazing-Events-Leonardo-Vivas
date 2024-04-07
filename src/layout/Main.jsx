
import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

import HEADER from "../shared/header/header";
import NAVBAR from "../shared/navBar/navBar";
import HERO from "../components/hero/Hero";
import HOME from "../pages/home/home";
import FOOTER from "../shared/footer/footer";



const MAIN = () => {

    const store = useSelector(store => store.heroReducer)

    let heroChange = store.stateHero;



    return (
        <>
            
                {
                    heroChange ? 
                    <header className="headerNoHero">
                        <HEADER /> 
                    </header>
                    :
                    <header className="header">
                        <HEADER />
                        <nav>
                            <NAVBAR />
                        </nav>
                    </header>
                }
                


            <main className="main bg">
                {
                    heroChange ?
                    <HERO /> 
                    : 
                    <Outlet /> 
                }
            </main>
            <footer className="footer">
                <FOOTER />
            </footer>
        </>
    )
}

export default MAIN;