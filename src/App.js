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

const showFilterCountries = () => {
    if (filter) {     
      const liste = countries.filter(el => el.name.includes(filter)).map(countrie => 
        <p key={countrie.numericCode}> {countrie.name} </p>)
      console.log(liste.length)
      if(liste.length < 10){
        return liste
      } else {
        return <p>Diese liste ist zu lang Spezifizire dein Sucheingabe</p>
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
