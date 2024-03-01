import React from 'react'
import './Casilla.css'

function Casilla(props) {
  return (
    <div className='container-casilla' >
        <div className='row'>
            <div className='col'>
                <h5>{props.textoMensaje}</h5>
            </div>
            <div className='col' style={{float: "right"}}>
                <button className='boton-curso' >Ver mensaje completo</button>
            </div>
        </div>
    </div>
  )
}

export default Casilla