import React from 'react'
import { useEffect, useState } from "react";
import Sidenav from '../Sidenav/Sidenav'
import './Edit_Section.css'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'

const Edit_Section = () => {

// Peticion GET
    const [cursos, getCursos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/cursos")
        .then((response) => response.json())
        .then((data) => getCursos(data))
        .catch((error) => console.log("Error:", error));
    }, []);

  return (
    <>
    <Sidenav />
    <div className="main-content">
        <h1>Editar cursos</h1>
        <Breadcrumb />
        <div className='searchbar mb-5'>
            <form class="d-flex align-items-center" role="search">
            <input id='form-catalogo' class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
            <svg id='pointer-search' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={'30px'}><path fill="#ffffff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            </form>
        </div>

        <div className="container courses-list">
            {/* Main line */}
            <div className="col-12 row env-main">
                <div className="col-3 env-main">
                    Curso
                </div>
                <div className="col-2 env-main">
                    Instructor
                </div>
                <div className="col-2 env-main">
                    Fecha registro
                </div>
                <div className="col-3 env-main">
                    Categorías
                </div>
                <div className="col-2 env-main">
                    Estado
                </div>
            </div>

            {/* Line 1 */}
            {cursos.map((curso) => (
            <div className="col-12 row env-main" key={curso.id}>
                <div className="col-3 env-main">
                    {curso.titulo}
                </div>
                <div className="col-2 env-main">
                    {curso.instructor.nombre}
                </div>
                <div className="col-2 env-main">
                    Fecha registro
                </div>
                <div className="col-3 env-main">
                    {curso.categoria}
                </div>
                <div className="col-2 env-main">
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