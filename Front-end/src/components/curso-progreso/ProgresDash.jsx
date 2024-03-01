import React from 'react'
import './ProgresDash.css'

let progreso = 0;
function avanzar(){
    if(progreso == 0){
        progreso = 1;
        let progreso

    }


}



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
                <button className='boton-curso'>Continuar Curso</button>
            </div>
        </div>
    </div>
  )
}

export default ProgresDash