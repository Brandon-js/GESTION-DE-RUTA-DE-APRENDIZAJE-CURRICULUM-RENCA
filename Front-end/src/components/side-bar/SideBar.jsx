import React from 'react'
import SideBoton from './SideBoton'
import logo from '../../assets/logo-renca.png'
import './SideBar.css'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <>

      <body id='sideNavColor'>

        <div id='bordecito' className='row'>
          <div id='borde'>
            <img className='img-fluid' id='loguito' src={logo}></img>
          </div>
          <div id='contenido-div'>
            <div id='links-div'>
              <Link to="/dashboard-user">
                <SideBoton seccion="Mi panel" />
              </Link>
              <Link to="/dashboard-mensaje">
                <SideBoton seccion="Mi perfil" />
              </Link>
              <Link to="/dashMensaje">
                <SideBoton seccion="Mensajes" />
              </Link>
              <Link to="/dash-mis-cursos">
                <SideBoton seccion="Mis cursos" />
              </Link>
            </div>
            <div id='cerrar-sesion-div'>
              <button style={{ width: 190 }} className='cerrar-sesion' >Cerrar sesion</button>
            </div>
          </div>
        </div>
      </body>


    </>
  )
}

export default SideBar

