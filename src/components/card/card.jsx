import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { get_events } from '../../store/actions/eventActions.js';

import './cardStyle.css'



const CARD = ({ page }) => {

    const events = useSelector(events => events.eventReducer.events)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_events())
    }, [dispatch])

    const pastEvents = events.filter(e => e.time == "past")
    const upComingEvents = events.filter(e => e.time == "upcoming")


    return (
        <div className='card__container'>
            {
                page === "home" ?
                    <>
                        {
                            events?.length > 0 ? events.map((item) => {
                                return (
                                    <div className="card" key={item.name}>
                                        <div className="cardTop__container">
                                            {
                                                item.time == "upcoming" ? "" : <h3>EVENT FINISHED</h3>
                                            }
                                            <figure className="cardimg__container">
                                                <img className="card__img" src={item.image} alt="" />
                                            </figure>
                                            <section>
                                                <h2>{item.name}</h2>
                                                <p>{item.date}</p>
                                            </section>
                                        </div>

                                        <div className="cardMid__container">
                                            <div className="cardparagraph__container">
                                                <p className="card__paragraph">{item.description}</p>
                                            </div>
                                            <div className="cont_pricen_and_category">
                                                <p>
                                                    Place: {item.place}
                                                </p>
                                                <p>
                                                    Category: {item.category}
                                                </p>
                                            </div>
                                            <div>
                                                <p>
                                                    Price: ${item.price}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="cardBot__container">
                                            <button className="card__button">Detalles</button>
                                        </div>
                                    </div>
                                )
                            }) : <h1>Nada</h1>
                        }
                    </>
                    : ""
            }
            {
                page === "past" ?
                    <>
                        {
                            events?.length > 0 ? pastEvents.map((item) => {
                                return (
                                    <div className="card" key={item.name}>
                                        <div className="cardTop__container">
                                            {
                                                item.time == "upcoming" ? "" : <h3>EVENT FINISHED</h3>
                                            }
                                            <figure className="cardimg__container">
                                                <img className="card__img" src={item.image} alt="" />
                                            </figure>
                                            <section>
                                                <h2>{item.name}</h2>
                                                <p>{item.date}</p>
                                            </section>
                                        </div>

                                        <div className="cardMid__container">
                                            <div className="cardparagraph__container">
                                                <p className="card__paragraph">{item.description}</p>
                                            </div>
                                            <div className="cont_pricen_and_category">
                                                <p>
                                                    Place: {item.place}
                                                </p>
                                                <p>
                                                    Category: {item.category}
                                                </p>
                                            </div>
                                            <div>
                                                <p>
                                                    Price: ${item.price}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="cardBot__container">
                                            <button className="card__button">Detalles</button>
                                        </div>
                                    </div>
                                )
                            }) : <h1>Nada</h1>
                        }
                    </>
                    : null
            }
            {
                page === "upcoming" ?
                    <>
                        {
                            events?.length > 0 ? upComingEvents.map((item) => {
                                return (
                                    <div className="card" key={item.name}>
                                        <div className="cardTop__container">
                                            {
                                                item.time == "upcoming" ? "" : <h3>EVENT FINISHED</h3>
                                            }
                                            <figure className="cardimg__container">
                                                <img className="card__img" src={item.image} alt="" />
                                            </figure>
                                            <section>
                                                <h2>{item.name}</h2>
                                                <p>{item.date}</p>
                                            </section>
                                        </div>

                                        <div className="cardMid__container">
                                            <div className="cardparagraph__container">
                                                <p className="card__paragraph">{item.description}</p>
                                            </div>
                                            <div className="cont_pricen_and_category">
                                                <p>
                                                    Place: {item.place}
                                                </p>
                                                <p>
                                                    Category: {item.category}
                                                </p>
                                            </div>
                                            <div>
                                                <p>
                                                    Price: ${item.price}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="cardBot__container">
                                            <button className="card__button">Detalles</button>
                                        </div>
                                    </div>
                                )
                            }) : <h1>Nada</h1>
                        }
                    </>
                    : null
            }
        </div>
    )
}

export default CARD