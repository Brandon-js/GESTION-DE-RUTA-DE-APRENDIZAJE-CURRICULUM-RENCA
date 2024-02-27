import React from 'react'
import './Navigation.css'

const Navigation = () => {
  return (
    <ul class="nav justify-content-center">
        <li class="nav-item">
            <a class="nav-link link-info active fuente-p" aria-current="page" href="#">Cursos</a>
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