import React from 'react'
import Casilla from '../components/curso-progreso/Casilla'
import SideBar from '../components/side-bar/SideBar'
function DashMensaje() {
  return (
    <div>
        <>
    
    <div className='row'>
    <div className='col-3'>
        <SideBar />
    </div>


    <div className='col-9'>
        <div className='row'>
            <h3>Mensajes</h3>
            <p>Dashboard Mensajes</p>
        </div>
        <div className='row'>
            <Casilla textoMensaje="te has suscrito a X curso!" />
            <Casilla />
            <Casilla />
            <Casilla />
            <Casilla />
            <Casilla />
        </div>
       
    </div>
        

    </div>

    </>
    </div>
  )
}

export default DashMensaje