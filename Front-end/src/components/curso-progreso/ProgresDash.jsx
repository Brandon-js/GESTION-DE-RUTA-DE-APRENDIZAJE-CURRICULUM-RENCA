import React from 'react'
import './ProgresDash.css'
import { Link } from 'react-router-dom'
function ProgresDash(props) {
  return (
    <div className='container-barra' >
        <div className='row'>
            <div className='col'>
                <h5>{props.tituloCurso}</h5>
            </div>
            <div className='col'>
                <div class="progress-bar-horizontal">
                    <div class="progress-track">
                        <div class="progress-fill">
                                <span>60%</span>
                            </div>
                        </div>
                    </div>
                </div>
            <div className='col'>
                <Link to ="/curso-view">
                <button className='boton-curso'>Continuar Curso</button>

                </Link>
            </div>
        </div>
    </div>
  )
}

export default ProgresDash