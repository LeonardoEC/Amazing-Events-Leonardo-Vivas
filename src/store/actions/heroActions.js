import { createAction } from "@reduxjs/toolkit";

export const changeHero = createAction (
    'changeHero',
    (obj) => {
        return {
            payload:{
                stateHero: obj.stateHero
        }
            }
    }
)

