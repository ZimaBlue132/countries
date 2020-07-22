import React, {useState} from 'react'

const Country = ({country, listView}) => {

  const [showCompact, setShowCompact] = useState(listView)

  const api_key = process.env.React_APP_API_KEY

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