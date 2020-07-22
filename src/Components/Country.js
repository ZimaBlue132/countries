import React, {useState} from 'react'
import Weather from './Weather'


const Country = ({country, listView}) => {

  const [showCompact, setShowCompact] = useState(listView)

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
        <Weather
        country={country}/>
      </div>              
    )
  }
}


export default Country