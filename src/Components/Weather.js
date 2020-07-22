import React, { useState, useEffect } from 'react'
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY

const Weather = ({country}) => {
    const [showWeather, setWeather] = useState(null)

    const hook = () => {
        axios
        .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.name}`)
        .then(response => {
            console.log(response)
            setWeather(response.data.current)
            console.log(showWeather)
        })
    }

  useEffect(hook, [country.name])

    if(!showWeather) {
        return <p>Loading...</p>
    } 
    return(
        <div>
            <hr/>
            <p>temperature: {showWeather.temperature}</p>
            <p>feelslike: {showWeather.feelslike}</p>
            <p>wind: {showWeather.wind_speed}</p>
            <p>wind direction: {showWeather.wind_dir}</p>    
            <hr/>
        </div>
    )
}

export default Weather