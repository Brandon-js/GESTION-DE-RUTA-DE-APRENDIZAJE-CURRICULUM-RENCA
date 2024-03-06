import React from 'react'
import SideBar from '../components/side-bar/SideBar'
import ProgresDash from '../components/curso-progreso/ProgresDash'
import '../components/curso-progreso/ProgresDash.css'
import CursoAbierto from '../components/CursoAbierto/CursoAbierto'
import SidenavUser from '../components/SidenavUser/SidenavUser'

function MisCursos() {
  return (
    <>
    <div className='row'>
    <div className='col-3'>
        <SidenavUser />
    </div>
    <div id='dentro' className='col-9'>

                            <div className="busqueda">
                              <div className='col' id='barra-busqueda'>
                                <label className="font-weight-bold">Buscar curso: </label>
                                <input type="search" className="form-control" placeholder="ingrese nombre del curso" />
                              </div>
                              <div className='col-1'>
                                
                              <input type="submit" value="Buscar"></input>

                              </div>
                            </div>
        <div>
        <ProgresDash tituloCurso ="Titulo Curso" />
        <ProgresDash tituloCurso ="Titulo Curso"/>
        <ProgresDash tituloCurso ="Titulo Curso"/>
        <ProgresDash tituloCurso ="Titulo Curso"/>
        <ProgresDash tituloCurso ="Titulo Curso"/>
        <ProgresDash tituloCurso ="Titulo Curso"/>
        

        </div>
       
    </div>
    </div>


    
    </>
  )
}

export default MisCursos