import React from 'react'

const Navigation = () => {
  return (
    <ul class="nav justify-content-center">
        <li class="nav-item dropdown">
            <a class="nav-link link-info dropdown-toggle fuente-p" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Explorar Cursos
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </li>

        <li class="nav-item">
            <a class="nav-link link-info active fuente-p" aria-current="page" href="#">Nosotros</a>
        </li>
        
        <li class="nav-item">
            <a class="nav-link link-info fuente-p" href="#">Preguntas Frecuentes</a>
        </li>
        
    </ul>
  )
}

export default Navigation