import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const get_events = createAsyncThunk('get_event', async(obj)=>{
    try{
        const response = await axios.get(`https://mindhub-xj03.onrender.com/api/amazing`)
        const events = response.data.events
        const category = response.data.events.map(e => e.category)
        const get_category = category.reduce((add, item) => {
            if(!add.includes(item)){
                add.push(item)
            }
            return add
        }, [])
        
        // Nuevas propiedades
        // propiedades de pasado
        for (let dateEvents of events) {
            if (dateEvents.date < response.data.currentDate) {
                dateEvents.time = "past"
                dateEvents.assistancepercentage = Number(((dateEvents.assistance / dateEvents.capacity) * 100).toFixed(2))
                dateEvents.revenues = dateEvents.price * dateEvents.assistance
            }
        }
    
        // propiedades de futuro
        for (let dateEvents of events) {
            if (dateEvents.date > response.data.currentDate) {
                dateEvents.time = "upcoming"
                dateEvents.estimatepercentage = Number(((dateEvents.estimate / dateEvents.capacity) * 100).toFixed(2))
                dateEvents.revenues = dateEvents.price * dateEvents.estimate
            }
        }

        return {
            currentDate: response.data.currentDate,
            events: response.data.events,
            category: get_category
        }
    } catch(error){
        console.log(error)
    }
})