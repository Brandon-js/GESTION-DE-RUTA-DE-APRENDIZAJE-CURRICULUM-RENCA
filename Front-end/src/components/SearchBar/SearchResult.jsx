import React from 'react'
import './SearchResult.css'

const SearchResult = ({result}) => {
    console.log('Result in SearchResult:', result);
  return ( 
    <div className="search-result" onClick={(e) => console.log(`You click on ${result.titulo}`)}>
        {result.titulo}
    </div> 
  )
}

export default SearchResult