import React, { useEffect, useState } from "react";
import Sidenav from '../Sidenav/Sidenav'
import './Edit_Section.css'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import SearchBar from '../SearchBar/SearchBar'
import SearchList from "../SearchBar/SearchList";

const Edit_Section = () => {

    const [cursos, setCursos] = useState([]);
    const [orden, setOrden] = useState({titulo: 'asc', instructor: 'asc', registerDate:'asc', categorias:'asc', state: 'asc'});
    const [cursosOrdenados, setCursosOrdenados] = useState([]);
    const [results, setResults] = useState([]);

     // Peticion GET
     useEffect(() => {
         fetch("http://localhost:8000/api/cursos")
         .then((response) => response.json())
         .then((data) => { 
             setCursos(data);
         })
         .catch((error) => console.log("Error:", error));
     }, [])
     // Ordenamiento
     const cambiarOrden = (section) => {
         const nuevoOrden = orden[section] === 'asc' ? 'desc' : 'asc';
         setOrden((prevOrden) => ({ ...prevOrden, [section]:nuevoOrden }))
         const cursosOrdenados = [...cursos].sort( (a, b) => {
             const valorA = a[section] ? a[section].toLowerCase() :  '';
             const valorB = b[section] ? b[section].toLowerCase() : ''
             //console.log(`ValorA: ${valorA}, ValorB: ${valorB}, Nuevo Orden: ${nuevoOrden}`)
             if (section === 'curso') {
                 if (nuevoOrden === 'asc') {
                     return a.titulo.localeCompare(b.titulo);
                 } else {
                     return b.titulo.localeCompare(a.titulo);
                 }
             } else if (section === 'instructor') {
                 if (nuevoOrden === 'asc') {
                     return a.instructor.nombre.localeCompare(b.instructor.nombre);
                 } else {
                     return b.instructor.nombre.localeCompare(a.instructor.nombre);
                 }
             } else if (section === 'categoria') {
                 if (nuevoOrden === 'asc') {
                     return a.categoria.localeCompare(b.categoria);
                 } else {
                     return b.categoria.nombre.localeCompare(a.categoria);
                 }
             } else {
                 if (nuevoOrden === 'asc') {
                     return valorA.localeCompare(valorB)
                 } else {
                     return valorB.localeCompare(valorA);
                 }
             }
      
         })
         // console.log('Cursos ordenados: ',cursosOrdenados)
         setCursosOrdenados(cursosOrdenados);
         setCursos(cursosOrdenados);
     };

  return (
    <>
    <Sidenav />
    <div className="main-content">
        <h1>Editar cursos</h1>
        <Breadcrumb />
        <div className="search-bar-container">
            <SearchBar setResults={setResults}/>
                {results && results.length > 0 &&
            <SearchList results={results}/>}
        </div>

        <div className="container courses-list mt-3">
            {/* Main line */}
            <div className="col-12 row env-main">
                <div className="col-3 env-main" onClick={() => cambiarOrden('curso')}>
                    Curso
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                    </svg>
                </div>
                <div className="col-2 env-main" onClick={() => cambiarOrden('curso')}>
                    Instructor
                </div>
                <div className="col-2 env-main">
                    Fecha registro
                </div>
                <div className="col-3 env-main" onClick={() => cambiarOrden('curso')}>
                    Categorías
                </div>
                <div className="col-2 env-main">
                    Estado
                </div>
            </div>

            {/* Line 1 */}
            {cursosOrdenados.map((curso) => (
            <div className="col-12 row" key={curso.id}>
                <div className="col-3 env-cursos">
                    {curso.titulo}
                </div>
                <div className="col-2 env-cursos">
                    {curso.instructor.nombre}
                </div>
                <div className="col-2 env-cursos">
                    Fecha registro
                </div>
                <div className="col-3 env-cursos">
                    {curso.categoria}
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

export default Edit_Section