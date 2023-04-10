import React from 'react'
import "../RightSide/RightSide.css"
// import SideForDiv from '../SideForDiv/SideForDiv'
import { useDispatch, useSelector } from 'react-redux'
import { getBulgar, selectWeather } from '../../store/weatherSlices/weatherSlices'
import SideForDiv from '../SideForDiv/SideForDiv'
import Info from '../Info/Info'
import InfoP from '../InfoP/InfoP'
import SideFor from '../SideFor/SideFor'

function RightSide() {
  const weather = useSelector(selectWeather)
  const dispatch=useDispatch()
 
  return (
    <div className='RightSide'>
      <div>
        <span className='FerumC' onClick={()=>dispatch(getBulgar(weather.decisive))}>{weather.decisive? "Click: °C":"Click: °F"}</span>
       

      </div>
     
      <img src={weather.icon} />

      <div className='RightSideTwo'>
        <Info/>
        <InfoP/>
      </div>
      <div className='DayWater'> <h4>5 Days Wather</h4></div>
        <SideFor/>
     
    </div>
  )
}

export default RightSide