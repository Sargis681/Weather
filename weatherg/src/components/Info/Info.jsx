import React from 'react'
import { useSelector } from 'react-redux'
import { selectWeather } from '../../store/weatherSlices/weatherSlices'

function Info() {
    const weather=useSelector(selectWeather)
  return (
    <div className='info'>
    <span>{weather.tempNow_C}°C</span>
    <h4>{weather.text}</h4>
    <h4>{weather.time}</h4>
  </div>
  )
}

export default Info