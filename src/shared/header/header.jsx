import { useDispatch } from 'react-redux';
import { changeHero } from '../../store/actions/heroActions';

import { Link } from "react-router-dom"

import './headerStyle.css'

const HEADER = () => {

    const dispatch = useDispatch()

    const handleHero = () => {
        const hero = {
            stateHero: true
        }

        dispatch(changeHero(hero))
    }


    return (
        <figure>
            <button className='btn__header' onClick={handleHero}>            
                <Link to="/">
                    <img className="header__img" src="Logo-Amazing-Events.png" alt="" />
                </Link>
            </button>
        </figure>
    )
}

export default HEADER;