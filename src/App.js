import React, { useState, useEffect } from 'react'
import Filter from './Components/Filter'
import axios from 'axios'

const App = () => {

const [countries, setCountries] = useState([])
const [filter, setFilter] = useState('')

const hook = () => {
  axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)
    })
}

useEffect(hook, [])

const showFilterCountries = () => {
    if (filter) {     
      const liste = countries.filter(el => el.name.includes(filter)).map(countrie => 
          <div key={countrie.numericCode}> 
            <p>
              {countrie.name} 
            </p>   
          <input type='button' onClick={() => solo} value="show"/>
         </div>           
        )
      const solo = countries.filter(el => el.name.includes(filter)).map(countrie => 
        <div key={countrie.numericCode}>
          <h1>
            {countrie.nativname} 
          </h1> 
          <p>capital: {countrie.capital}</p>
          <p>population: {countrie.population}</p>
          <div>
            <h2>languages</h2>
              <ul>
                {countrie.languages.map(language => <li key={language.name}> {language.name} </li>)}
              </ul>
            <div>
                <img src={countrie.flag} alt="schalte deine Bilder ein!" height="250"></img>
            </div>
          </div>
        </div>              
    )
      if(liste.length === 1){
        return solo
        } else {
          if(liste.length < 10){
            return liste
          } else {
            return <p>Diese liste ist zu lang Spezifizire dein Sucheingabe</p>
          }
        }
      }
    }
  

  return(
    <div>
      <Filter 
      filter={filter}
      setFilter={setFilter}
      />
      <div>
        {showFilterCountries()}
      </div>
    </div>
  )
}

export default App
