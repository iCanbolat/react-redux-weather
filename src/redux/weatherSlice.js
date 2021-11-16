import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 
export const fetchDefault = createAsyncThunk('weather/getWeather', async (selectedCity) => {
    const res = await axios(`http://api.weatherapi.com/v1/forecast.json?key=ebb6c0feefc646f6aa6124922211211&q=${selectedCity}&days=10&aqi=no&alerts=no
    `)
    return res.data 
});

export const weatherSlice = createSlice({   
    name: "weather",
    initialState : {
        item : {},
        days : [],
    },
    reducers:{
 
    },
    extraReducers:{
        [fetchDefault.fulfilled]: (state , action) => {
           
            state.item = action.payload;
            let a = action.payload.forecast?.forecastday
            let b = a.map(({date})=> date).map(x => new Date(x).toLocaleString('en-us', {weekday: 'long'}) )
            state.days = b
             
        },
        [fetchDefault.pending]: (state , action) => {
           
            console.log("sadsad")
        }
    }
});

export default weatherSlice.reducer
 