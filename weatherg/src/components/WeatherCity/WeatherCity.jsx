import React from 'react'
import { useSelector } from 'react-redux'
import { selectWeather } from '../../store/weatherSlices/weatherSlices'

function WeatherCity() {
    const weather = useSelector(selectWeather)
  return (
    <h3>Weather in  {weather.city} country {weather.country}</h3>

  )
}

export default WeatherCity