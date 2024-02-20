import React from 'react'
import ProgresDash from '../components/curso-progreso/ProgresDash'
import '../components/curso-progreso/DashBoard.css'
import BotonCursos from '../components/curso-progreso/BotonCursos'
import '../components/curso-progreso/BotonCursos.css'
import SideBar from '../components/side-bar/SideBar'

function DashBoard() {
  return (
    <>
    
    <div className='row'>
    <div className='col-3'>
        <SideBar />
    </div>


    <div className='col-9'>
        <div id='bienvenida' className='row'>
            <h3>Hola User</h3>
            <p>lorem ipsum</p>
        </div>
        <div className='row'>
            <div id='verde' className='col'>
            <BotonCursos />
            </div>
            <div id='naranja' className='col'>
            <BotonCursos />
            </div>
            <div id='azul' className='col'>
            <BotonCursos />
            </div>
        </div>
        <div>
            <ProgresDash />
            <ProgresDash />
            <ProgresDash />
            <ProgresDash />
        </div>
    </div>
        

    </div>

    </>
  )
}

export default DashBoard