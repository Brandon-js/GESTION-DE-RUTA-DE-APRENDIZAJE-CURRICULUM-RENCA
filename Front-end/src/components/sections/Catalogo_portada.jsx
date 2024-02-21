import React from 'react'
import imgPortada from '../../assets/portada_catalogo.jpg'
import './Catalogo_portada.css'


const Catalogo_portada = () => {
    return (
    <>
    <div>
        <div id='img-portada'>
            <img src={imgPortada} className='img-fluid' />
        </div>
        <div className='container text-center align-items-center' id='cont-portada'>
            <h1>NUESTRO CATÁLOGO</h1>
            <p>¡Explora nuestro catálogo de cursos y da el primer paso hacia tu éxito educativo!</p>
            <div className='searchbar'>
                <form class="d-flex align-items-center" role="search">
                <input id='form-catalogo' class="form-control me-2" type="search" placeholder="Buscar curso" aria-label="Search" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={'30px'}><path fill="#ffffff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                </form>
            </div>
        </div>
    </div>
    </>
    )
}

export default Catalogo_portada