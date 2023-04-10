import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import LeftSide from './components/LeftSide/LeftSide';
import RightSide from './components/RightSide/RightSide';
import { useEffect } from 'react';
import fetchWeather from './store/weatherSlices/weatherAPI';
import { getWithLocation, selectSearch } from './store/serachSlices/searchSlices';
import "../src/Media/Media.css"

function App() {
  const search = useSelector(selectSearch)
  const dispatch = useDispatch()

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position) => {
      const coords =  position.coords.latitude.toString().slice(0, 5) + ' ' + position.coords.longitude.toString().slice(0, 5)
      dispatch(getWithLocation(coords))
    })
  })
  useEffect(()=>{
    dispatch(fetchWeather(search))
  },[search])

  return (
    <div className="App">
         <div className="container">
      <LeftSide />
      <div className='line'></div>
      <RightSide />
        
      </div>
      
    </div>
  );
}

export default App;
