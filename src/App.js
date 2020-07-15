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
      console.log(countries.name)
    })
}

useEffect(hook, [])

const showFilterCountries = () => {
  if (filter) {
    return countries.filter(el => el.name.includes(filter)).map(countrie => 
      <p key={countrie.numericCode}> {countrie.name} </p>)
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
