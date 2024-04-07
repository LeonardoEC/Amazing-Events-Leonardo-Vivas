import { configureStore } from '@reduxjs/toolkit'
import eventReducer from './reducers/eventReducers';
import heroReducer from './reducers/heroReducers';

export const store = configureStore({
    reducer: {
        eventReducer,
        heroReducer
    }
})