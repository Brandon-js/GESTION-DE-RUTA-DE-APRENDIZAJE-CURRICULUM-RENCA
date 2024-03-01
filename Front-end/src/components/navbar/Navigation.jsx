import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <ul class="nav justify-content-center">
        <li class="nav-item">
            <Link to="/catalogo" class="nav-link link-info active fuente-p" aria-current="page">Cursos</Link>
        </li>

        <li class="nav-item">
            <a href="#qs-section" class="nav-link link-info active fuente-p" aria-current="page">Nosotros</a>
        </li>
        
        <li class="nav-item"> 
        <Link to="/preguntas-frecuentes" className='nav-link link-info active fuente-p'>Preguntas Frecuentes</Link>
        </li>
    </ul>
)
}

export default Navigation;
