import { createSlice } from "@reduxjs/toolkit";
import fetchWeather from "./weatherAPI";

const weatherSlices = createSlice({
    name: "weather",
    initialState: {}, 
    reducers:{
        getBulgar(state,{payload}){
            // console.log(payload);
            return {
                ...state,
                decisive:!payload
                
            }
        }
        
    },
    extraReducers:{
        [fetchWeather.fulfilled]: (state,{payload})=>{
            // console.log(payload);
            return payload
        }
    }
})

export const selectWeather = state => state.weather 

export const weatherReducer = weatherSlices.reducer

export const { getBulgar } = weatherSlices.actions