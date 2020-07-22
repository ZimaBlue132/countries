import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Country = ({country, listView}) => {

  const [showCompact, setShowCompact] = useState(listView)
  const [showWeather, setWeather] = useState(null)

  const api_key = process.env.REACT_APP_API_KEY
  console.log(api_key)
  
  

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

  if (showCompact) {
    return (
      <div>
        <p>{country.name}</p>
        <button onClick={() => setShowCompact(false)} >show</button>
      </div>
    )
  } else {
    return( 
      <div>
        <h1>
          {country.nativeName} 
        </h1> 
        <p>capital: {country.capital}</p>
        <p>population: {country.population}</p>
        <h2>languages</h2>
        <ul>
          {country.languages.map(language => <li key={language.name}> {language.name} </li>)}
        </ul>
        <img src={country.flag} alt="schalte deine Bilder ein!" height="250"></img>
        <div>
          {
            listView
            ? <button onClick={() => setShowCompact(true)}>close</button>
            : null
          }
        </div>
        <h2>Weather in {country.capital}</h2>
        <p>temperature: </p>'
        <p>wind: </p>
      </div>              
    )
  }
}


export default Country