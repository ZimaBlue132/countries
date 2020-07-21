import React, {useState} from 'react'

const Country = ({country, listView}) => {
  console.log('rendere Country mit listView', listView)

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
      </div>              
    )
  }
}


export default Country