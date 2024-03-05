import React from 'react'
import './BotonCursos.css'

const BotonCursos = (props) => {
  return (
    <>
        <button className='boton-cursos'>
            <h5>{props.cantidad}</h5>
            <p>{props.estadoCurso}</p>
        </button>
    </>
  )
}
export default BotonCursos;