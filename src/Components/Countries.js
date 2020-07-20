import React from 'react'
import Country from './Country'

const Countries = ({countries}) => {  
    if (countries.length === 0) {
        return <p>keine Ergebnisse mit diesem Filter</p>  
    }
    if (countries.length === 1) {
        return <Country country={countries[0]}/>
    }
    if (countries.length <= 10) {
        return countries.map(country => <Country country={country} key={country.numericCode} listView={true}/>)
    }
    return <p>Liste ist zu lang!</p>
}

export default Countries