import React from 'react'
import SideBar from '../components/side-bar/SideBar'
import CursoAbierto from '../components/CursoAbierto/CursoAbierto'


function CursoView() {
  return (
    <div>
    <>
    <div className='row'>
    <div className='col-3'>
        <SideBar />
    </div>
    <div className='col-9'>
        <div className='row'>
            <CursoAbierto />
        </div>
        <button className='DashPerfilButton'>Anterior</button>
        <button className='DashPerfilButton'>Siguiente</button>
    </div>
    
    </div>
    
    </>
    </div>
  )
}

export default CursoView