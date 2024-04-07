import { useDispatch } from 'react-redux';
import { changeHero } from '../../store/actions/heroActions';
import { Link } from 'react-router-dom';


import './HeroStyle.css'



const HERO = () => {

    const dispatch = useDispatch()

    const handleHero = () => {
        const hero = {
            stateHero: false
        }

        dispatch(changeHero(hero))
    }



    return (
        <div className="container hero__container">
            <div className="text__container">
                <h4 className="title hero__title">Amancing Events</h4>
                <p className="paragraph hero__paragraph">
                    Las mejores fiestas, los mejores espectaculos y muchos mas.
                    Unete a nuestra proxima aventura
                </p>
                <Link to="/home">
                    <button onClick={handleHero} className="hero__btn">Aventurate!!</button>
                </Link>
            </div>
            <figure className="heroimg__container">
                <img className="hero__img" src="undraw_yacht_re_kkai.svg" alt="" />
            </figure>
        </div>
    )
}

export default HERO