import React from 'react'
import Casilla from '../components/curso-progreso/Casilla'
import SideBar from '../components/side-bar/SideBar'
function DashMensaje() {
  return (
    <div>
        <>
    
    <div className='row'>
    <div className='col-2'>
        <SideBar />
    </div>


    <div className='col-10'>
        <div className='row'>
            <h3>Mensajes</h3>
            <p>Dashboard Mensajes</p>
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