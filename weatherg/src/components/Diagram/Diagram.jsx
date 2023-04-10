import React from 'react'
import "../Diagram/Diagram.css"
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJs,
    LineElement,
    CategoryScale,//x axis
    LinearScale,  //y axis
    PointElement,
    Tooltip,
} from "chart.js"
import { useSelector } from 'react-redux'
import { selectWeather } from '../../store/weatherSlices/weatherSlices'
ChartJs.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip
)

function Diagram() {
    const { todayTime } = useSelector(selectWeather)
    const weather = useSelector(selectWeather)
    const { todayTemp_C } = useSelector(selectWeather)
    const { todayTemp_F } = useSelector(selectWeather)


    console.log(todayTime);
    const data = {

        labels: todayTime,
        datasets: [
            {
                labels: "Sales of the Week",
                data: weather.decisive ? todayTemp_C : todayTemp_F,
                // backgroundColor: 'orange',
                borderColor: '#000',
                color:"white",
                pointBorderColor: 'blue',
                fill: true,
                tension: 0.4

            }
        ]
    }
    const options = {
        plugins: {
            legend: true
        },

    }
    return (
        <div className='diagram'
            style={{
                maxWidth: "500px",
                minWidth: "400px",
                color: "white",
                fontFamily:"sans-serif",
                borderColor: '#000',
                cursor:"pointer",
                borderRadius:"30px",

                backgroundColor: " rgba(0, 0, 0, 0.478)"
            }}
        >


            <Line
                data={data}
                options={options}
            ></Line>
        </div>
    )
}

export default Diagram