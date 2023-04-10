import { configureStore } from "@reduxjs/toolkit";
import { weatherReducer } from "./weatherSlices/weatherSlices";
import { searchReducer } from "./serachSlices/searchSlices";

const store = configureStore({
    reducer: {
        weather: weatherReducer,
        search:searchReducer
    }
})

export default store