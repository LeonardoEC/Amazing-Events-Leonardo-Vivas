import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { get_events } from '../../store/actions/eventActions.js';

import './searchStyle.css'

const SEARCH = () => {


    const category = useSelector(events => events.eventReducer.category)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_events())
    }, [dispatch])

    return (
        <div>
            <div className="searchBar__container">
                <input id="searchBar" className="searchBar" type="text" placeholder="Title - Category - Date" />
            </div>
            <div className="category__container" id="category__container">
                {
                    category?.length > 0 ? category.map((item) => (
                        <label key={item}>
                            <input type="checkbox" name="" id="" /> {item}
                        </label>
                    ))
                        : null
                }
            </div>
        </div>
    )
}

export default SEARCH