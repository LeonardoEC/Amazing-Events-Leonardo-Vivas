import { createReducer } from "@reduxjs/toolkit";
import { changeHero } from "../actions/heroActions";

const iniciaState = {
    stateHero: true
}

const heroReducer = createReducer(iniciaState,
    (builder) => builder
        .addCase(changeHero, (state, action) => {
            return {
                ...state,
                stateHero: action.payload.stateHero
            }
        })
)

export default heroReducer