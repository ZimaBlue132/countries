import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'
import Country from './Components/Country'

axios.get('https://restcountries.eu/rest/v2/all').then(response => {
  const countries = response.data
  ReactDOM.render(
    <App countries={countries} />,
    <Country countries={countries}/>,
    document.getElementById('root')
  )
})
 