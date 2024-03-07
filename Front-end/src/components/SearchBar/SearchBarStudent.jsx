import React, { useEffect, useState } from "react";

const SearchBarStudent = ({setResults}) => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("http://localhost:8000/api/usuarios")
        .then((response) => response.json())
        .then( (json) => {
            const results = json.filter((usuarios) => {
                return (value && usuarios && usuarios.nombre && usuarios.nombre.toLowerCase().includes(value)
                );
            })
            console.log('Results from API:', results);
            setResults(results);
        })
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }
  return (
    <div className='searchbar'>
    <form className="d-flex align-items-center" role="search">
    <input id='form-catalogo' className="form-control me-2" placeholder="Buscar"  value={input} onChange={(e) => handleChange(e.target.value)} />
    <svg id='pointer-search' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={'30px'}><path fill="#ffffff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
    </form>
</div>
  )
}

export default SearchBarStudent