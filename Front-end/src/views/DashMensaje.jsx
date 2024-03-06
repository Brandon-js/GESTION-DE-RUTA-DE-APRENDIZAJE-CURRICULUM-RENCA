import React from 'react'
import Casilla from '../components/curso-progreso/Casilla'
import SideBar from '../components/side-bar/SideBar'
import SidenavUser from '../components/SidenavUser/SidenavUser'
function DashMensaje() {
  return (
    <div>
        <>
    
    <div className='row'>
    <div className='col-3'>
        <SidenavUser />
    </div>


    <div id='dentro' className='col-9'>
        <div className='row'>
            <h3>Mensajes</h3>
            <p>Dashboard Mensajes</p>
        </div>
        <div className='row'>
            <Casilla textoMensaje="te has suscrito a X curso!" />
            <Casilla textoMensaje="has superado con exito" />
            <Casilla textoMensaje="te has suscrito a Python" />
            <Casilla textoMensaje="Bienvenido" />
            <Casilla textoMensaje="Estupendo completaste el curso de Excel"/>
            <Casilla textoMensaje="Recordatorio retomar curso cueca brava" />
            <Casilla textoMensaje="Bienvenido" />
            <Casilla textoMensaje="Bienvenido" />
            <Casilla textoMensaje="Bienvenido" />
            <Casilla textoMensaje="Bienvenido" />
            <Casilla textoMensaje="Bienvenido" />
        </div>
       
    </div>
        

    </div>

    </>
    </div>
  )
}

export default DashMensaje