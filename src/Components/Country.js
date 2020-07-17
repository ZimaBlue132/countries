import React from 'react'

const Country = ({countries, filter}) => countries.filter(el => el.name.includes(filter)).map(country => 
    <div key={country.numericCode}>
      <h1>
        {country.nativname} 
      </h1> 
      <p>capital: {country.capital}</p>
      <p>population: {country.population}</p>
      <div>
        <h2>languages</h2>
          <ul>
            {country.languages.map(language => <li key={language.name}> {language.name} </li>)}
          </ul>
        <div>
            <img src={country.flag} alt="schalte deine Bilder ein!" height="250"></img>
        </div>
      </div>
    </div>              
)

export default Country