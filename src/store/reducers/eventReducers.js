import { createReducer } from "@reduxjs/toolkit";
import { get_events } from "../actions/eventActions";

const initialState = {
    currentDate: "",
    events: [],
    category: []
}

const eventReducer = createReducer(initialState,
    (builder) => { builder
        .addCase(get_events.fulfilled, (state, action) => {
            return{
                ...state,
                currentDate: action.payload.currentDate,
                events: action.payload.events,
                category: action.payload.category
            }
        })
    })

export default eventReducer