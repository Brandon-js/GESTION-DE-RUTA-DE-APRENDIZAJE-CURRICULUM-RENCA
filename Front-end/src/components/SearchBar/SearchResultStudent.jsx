import React from 'react'
import './SearchResult.css'

const SearchResultStudent = ({result}) => {
    console.log('Result in SearchResult:', result);
  return ( 
    <div className="search-result" onClick={(e) => console.log(`You click on ${result.nombre}`)}>
        {result.nombre}
    </div> 
  )
}

export default SearchResultStudent