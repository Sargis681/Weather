import React from 'react'
import { useSelector } from 'react-redux'
import { selectWeather } from '../../store/weatherSlices/weatherSlices'

function InfoP() {
    const weather=useSelector(selectWeather)
  return (
    <div className='infoP'>
    <span>Humidity:{weather.humidity}%</span>
    <span>Cloud Cover: {weather.cloud}</span>
    <span>Wind: {weather.wind_kph}/H</span>
    <span> Max Temspan: {weather.decisive ? weather.maxtemp_c + "°C" : weather.maxtemp_f + "°F"}</span>
    <span> Min Temspan: {weather.decisive ? weather.mintemp_c + "°C" : weather.mintemp_f + "°F"}</span>
  </div>
  )
}

export default InfoP