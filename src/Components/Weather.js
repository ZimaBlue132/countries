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
        return null
    } 
    return(
        <div>
            <p>temperature: {showWeather.temperature}</p>
            <p>wind: {showWeather.wind_degree}</p>
        </div>
    )
}

export default Weather