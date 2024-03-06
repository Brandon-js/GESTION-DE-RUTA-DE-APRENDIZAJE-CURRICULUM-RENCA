import React, { useEffect, useState } from "react";
import Sidenav from '../Sidenav/Sidenav'
import './Edit_Section.css'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'

const Edit_Section = () => {

    const [cursos, setCursos] = useState([]);
    const [orden, setOrden] = useState({titulo: 'asc', instructor: 'asc', registerDate:'asc', categorias:'asc', state: 'asc'});
    const [cursosOrdenados, setCursosOrdenados] = useState([]);

    // Peticion GET
    useEffect(() => {
        fetch("http://localhost:8000/api/cursos")
        .then((response) => response.json())
        .then((data) => setCursos(data))
        .catch((error) => console.log("Error:", error));
    }, []);

    // Ordenamiento
    const cambiarOrden = (section) => {
        const nuevoOrden = orden[section] === 'asc' ? 'desc' : 'asc';
        setOrden((prevOrden) => ({ ...prevOrden, [section]:nuevoOrden }));

        const cursosOrdenados = [...cursos].sort( (a, b) => {
            const valorA = a[section] ? a[section].toLowerCase() :  '';
            const valorB = b[section] ? b[section].toLowerCase() : '';

            console.log(`ValorA: ${valorA}, ValorB: ${valorB}, Nuevo Orden: ${nuevoOrden}`);

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
            
        });

        console.log('Cursos ordenados: ',cursosOrdenados);

        setCursosOrdenados(cursosOrdenados);
        setCursos(cursosOrdenados);
    };


  return (
    <>
    <Sidenav />
    <div className="main-content">
        <h1>Editar cursos</h1>
        <Breadcrumb />
        <div className='searchbar mb-5'>
            <form className="d-flex align-items-center" role="search">
            <input id='form-catalogo' className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
            <svg id='pointer-search' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={'30px'}><path fill="#ffffff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            </form>
        </div>

        <div className="container courses-list">
            {/* Main line */}
            <div className="col-12 row env-main">
                <div className="col-3 env-main" onClick={() => cambiarOrden('curso')}>
                    Curso
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
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