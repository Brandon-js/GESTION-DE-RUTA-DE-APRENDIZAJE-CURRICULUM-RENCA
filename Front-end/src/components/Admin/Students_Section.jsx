import React, { useEffect, useState } from "react";
import Sidenav from '../Sidenav/Sidenav'
import './Edit_Section.css'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import SearchBarStudent from '../SearchBar/SearchBarStudent'
import SearchListStudent from "../SearchBar/SearchListStudent";
import {Link} from 'react-router-dom'

const Students_Section = () => {

    const [usuario, setUsuario] = useState([]);
    const [orden, setOrden] = useState({nombre: 'asc', email: 'asc', registerDate:'asc', genero :'asc', state: 'asc'});
    const [usuariosOrdenados, setUsuariosOrdenados] = useState([]);
    const [results, setResults] = useState([]);

     // Peticion GET
     useEffect(() => {
         fetch("http://localhost:8000/api/usuarios")
         .then((response) => response.json())
         .then((data) => { 
             setUsuario(data);
         })
         .catch((error) => console.log("Error:", error));
     }, [])
     // Ordenamiento
     const cambiarOrden = (section) => {
         const nuevoOrden = orden[section] === 'asc' ? 'desc' : 'asc';
         setOrden((prevOrden) => ({ ...prevOrden, [section]:nuevoOrden }))
         const usuariosOrdenados = [...usuario].sort( (a, b) => {
             const valorA = a[section] ? a[section].toLowerCase() :  '';
             const valorB = b[section] ? b[section].toLowerCase() : ''
             //console.log(`ValorA: ${valorA}, ValorB: ${valorB}, Nuevo Orden: ${nuevoOrden}`)
            if (section === 'usuario') {
              if (nuevoOrden === 'asc') {
                  return a.usuario.localeCompare(b.usuario);
              } else {
                  return b.usuario.localeCompare(a.usuario);
              }
          } else if (section === 'email') {
              if (nuevoOrden === 'asc') {
                  return a.email.localeCompare(b.email);
              } else {
                  return b.email.localeCompare(a.email);
              }
          } 
            else {
              if (nuevoOrden === 'asc') {
                  return valorA.localeCompare(valorB)
              } else {
                  return valorB.localeCompare(valorA);
              }
          }
      
         })
         // console.log('Cursos ordenados: ',cursosOrdenados)
         setUsuariosOrdenados(usuariosOrdenados);
         setUsuario(usuariosOrdenados);
     };

  return (
    <>
    <Sidenav />
    <div className="main-content">
        <h1>Estudiantes</h1>
        <Breadcrumb />
        <div className="search-bar-container">
            <SearchBarStudent setResults={setResults}/>
                {results && results.length > 0 &&
            <SearchListStudent results={results}/>}
        </div>

        <div className="container courses-list mt-3">
            {/* Main line */}
            <div className="col-12 row env-main">
                <div className="col-3 env-main" onClick={() => cambiarOrden('usuario')}>
                    Nombre
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                    </svg>
                </div>
                <div className="col-2 env-main" onClick={() => cambiarOrden('usuario')}>
                    Correo
                </div>
                <div className="col-2 env-main">
                    Fecha registro
                </div>
                <div className="col-3 env-main" onClick={() => cambiarOrden('usuario')}>
                    Género
                </div>
                <div className="col-2 env-main">
                    Estado
                </div>
            </div>

            {/* Line 1 */}
            {usuariosOrdenados.map((user) => (
            <div className="col-12 row" key={user.id}>
                <div className="col-3 env-cursos">
                    
                        {user.nombre}
                    
                </div>
                <div className="col-2 env-cursos">
                    {user.email}
                </div>
                <div className="col-2 env-cursos">
                    Fecha registro
                </div>
                <div className="col-3 env-cursos">
                    {user.genero}
                </div>
                <div className="col-2 env-cursos">
                    Estado
                </div>
            </div>
            ))}


        </div>

    </div>
    
    
    </>
  )
}

export default Students_Section