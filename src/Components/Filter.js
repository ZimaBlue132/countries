import React from 'react'

const Filter = (filter, setFilter) => {
    return  <div>
                find countries <input 
                value={filter}
                onchange={(event) => setFilter(event.target.value)}
                />
            </div>
}

export default Filter