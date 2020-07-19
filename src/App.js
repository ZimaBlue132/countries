import React, { useState, useEffect } from 'react'
import Filter from './Components/Filter'
import Country from './Components/Country'
import axios from 'axios'



const App = () => {

const [countries, setCountries] = useState([])
const [filter, setFilter] = useState('')
const [button, setButton] = useState(false)

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
      const liste = countries.filter(el => el.name.includes(filter)).map(country => 
          <div key={country.numericCode}> 
            <p>
              {country.name} 
            </p>   
          <input type='button' onClick={() => setButton === false} value="show"/>
         </div>           
        )
      
      if(liste.length === 1){
        return <Country
              filter={filter}
              countries={countries}
              />
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
