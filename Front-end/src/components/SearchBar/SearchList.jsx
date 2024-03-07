import React from 'react'
import "./SearchList.css"
import SearchResult from './SearchResult'

const SearchList = ({results}) => {
    console.log("Results in SearchList:", results)

  return (
    <div className="results-list">
        {results.map((result, id) => {
            return <SearchResult result={result} key={id} />
        })}
            
    </div>
  )
}

export default SearchList