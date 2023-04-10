import React from 'react'
import { useSelector } from 'react-redux'
import { selectWeather } from '../../store/weatherSlices/weatherSlices'

function SideFor() {
    const weather=useSelector(selectWeather)
  return (
    <div className='SideFor'>
    {weather.fiveDays?.map((el, idx) => (
      <div key={idx}>
        <span>{el.text}</span>
        <span>{el.date}</span>
        <img src={el.icon} />
        <span> {weather.decisive ? el.maxtemp_c + "°C" : el.maxtemp_f + "°F"}</span>
        <span> {weather.decisive ? el.mintemp_c + "°C" : el.mintemp_f + "°F"}</span>

      </div>
    ))}
  </div>
  )
}

export default SideFor