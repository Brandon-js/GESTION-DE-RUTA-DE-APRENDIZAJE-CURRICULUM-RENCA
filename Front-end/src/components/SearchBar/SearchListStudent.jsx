import React from 'react'
import "./SearchList.css"
import SearchResultStudent from './SearchResultStudent'

const SearchListStudent = ({results}) => {
    console.log("Results in SearchList:", results)

  return (
    <div className="results-list">
        {results.map((result, id) => {
            return <SearchResultStudent result={result} key={id} />
        })}
            
    </div>
  )
}

export default SearchListStudent