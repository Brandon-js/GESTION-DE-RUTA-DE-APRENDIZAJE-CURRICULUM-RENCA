import React from 'react'
import './ProgresDash.css'
import { useState } from 'react'


function ProgresDash(props) {
    const [porcentaje, setPorcentaje] = useState(props.porcentajeInicial || 0);

    const actualizarPorcentaje = (nuevoPorcentaje) => {
        if (nuevoPorcentaje >= 0 && nuevoPorcentaje <= 100) {
          setPorcentaje(nuevoPorcentaje);
        }
      };


  return (
    <div className='container-barra' >
        <div className='row'>
            <div className='col'>
                <h5>{props.tituloCurso}</h5>
            </div>
            <div className='col'>
                <div class="progress-bar-horizontal">
                    <div class="progress-track">
                        <div class="progress-fill" style={{ width: `${porcentaje}%` }}>
                        
                                <span><p id='percentege'>{`${porcentaje}%`}</p></span>
                            </div>
                        </div>
                    </div>
                </div>
            <div className='col'>
                <button className='boton-curso'>Continuar Curso</button>
            </div>
        </div>
    </div>
  )
}

export default ProgresDash