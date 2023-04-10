import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchWeather = createAsyncThunk (
    'weather/fetchWeather',
    async function (search) {
        const { data } = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=b47f10c9cfa141f7992122814230104&q=${search}&days=5&aqi=no&alerts=no`)

        const wheatherData = { 
            decisive:true,
            city: data.location.name,
            region:data.location.region,
            country:data.location.country,
            tempNow_C:data.current.temp_c,
            tempNow_F:data.current.temp_f,
            text:data.current.condition.text,
            icon:data.current.condition.icon,
            time:data.location.localtime,
            humidity:data.current.humidity,
            cloud:data.current.cloud,
            wind_mph:data.current.wind_mph,
            wind_kph:data.current.wind_kph,
            maxtemp_c:data.forecast.forecastday[0].day.maxtemp_c,
            maxtemp_f:data.forecast.forecastday[0].day.maxtemp_f,
            mintemp_c:data.forecast.forecastday[0].day.mintemp_c,
            mintemp_f:data.forecast.forecastday[0].day.mintemp_f,
            fiveDays:
                data.forecast.forecastday.map(day => ({
                    maxtemp_c: day.day.maxtemp_c,
                    maxtemp_f:day.day.maxtemp_f,
                    mintemp_c:day.day.mintemp_c,
                    mintemp_f:day.day.mintemp_f,
                    text:day.day.condition.text,
                    icon:day.day.condition.icon,
                    date:day.date
                }))
            ,
            todayTime:data.forecast.forecastday[0].hour.map(hour=>hour.time.slice(10)),
            todayTemp_C: data.forecast.forecastday[0].hour.map(hour=>hour.temp_c),
            todayTemp_F:data.forecast.forecastday[0].hour.map(hour=>hour.temp_f)

        

        }
        // console.log(wheatherData);
        return wheatherData
    }
)

export default fetchWeather