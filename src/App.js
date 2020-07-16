import React, { useState, useEffect } from 'react'
import Filter from './Components/Filter'
import axios from 'axios'

const App = () => {

const [countries, setCountries] = useState([])
const [filter, setFilter] = useState('')

const hook = () => {
  console.log('effect')
  axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      console.log('promise fulfilled')
      setCountries(response.data)
    })
}

useEffect(hook, [])

const test = () => {
  return console.log('nice try')
}

const showFilterCountries = () => {
    if (filter) {     
      const liste = countries.filter(el => el.name.includes(filter)).map(countrie => 
          <div key={countrie.numericCode}> 
            <p>
              {countrie.name} 
            </p>   
      <input type="button" value='show'></input>
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
              <li>{countrie.languages[0].name}</li>
            <div>
                <img src={countrie.flag} alt="schalte deine Bilder ein!" width="300" height="250"></img>
            </div>
          </div>
        </div>              
    )
      console.log(liste.length)
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
