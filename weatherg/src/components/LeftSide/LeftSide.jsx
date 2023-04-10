import React, { useRef } from 'react'
import "../LeftSide/LeftSide.css"
import Diagram from '../Diagram/Diagram'
import { useDispatch, useSelector } from 'react-redux'
import { addSearch } from '../../store/serachSlices/searchSlices'
import { selectWeather } from '../../store/weatherSlices/weatherSlices'
import WeatherCity from '../WeatherCity/WeatherCity'

function LeftSide() {
  const weather=useSelector(selectWeather)
  const ref = useRef(null)
  const dispatch = useDispatch()

  const handleSubmit = (e) =>{
    e.preventDefault()
    
    dispatch(addSearch(ref.current[0].value))

    ref.current.reset()
  }

  return (

    <div className='locName'>
      <WeatherCity/>
      <form onSubmit={handleSubmit} ref={ref}>
        <input type='text' />
        <button>SEARCH</button>
      </form>
      {/* <div className='diagram'> */}
        <Diagram/>
      {/* </div> */}
    </div>



  )
}

export default LeftSide