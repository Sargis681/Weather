import { createSlice } from "@reduxjs/toolkit";

const searchSlices = createSlice({
    name:"search",
    initialState:"",
    reducers:{
        addSearch(state,{payload}){
            // console.log(payload);
            return payload
        },
        getWithLocation(state,{payload}){
            // console.log(payload);
            return payload
        },
       
    }
})

export const selectSearch = state => state.search

export const searchReducer = searchSlices.reducer

export const { addSearch,getWithLocation,getBulian } = searchSlices.actions