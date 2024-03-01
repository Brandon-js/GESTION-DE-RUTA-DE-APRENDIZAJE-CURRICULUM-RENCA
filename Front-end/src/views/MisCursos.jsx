import React from 'react'
import SideBar from '../components/side-bar/SideBar'
import ProgresDash from '../components/curso-progreso/ProgresDash'
import '../components/curso-progreso/ProgresDash.css'
import CursoAbierto from '../components/CursoAbierto/CursoAbierto'

function MisCursos() {
  return (
    <>
    <div className='row'>
    <div className='col-2'>
        <SideBar />
    </div>
    <div className='col-10'>

                            <div className="busqueda">
                                <label className="font-weight-bold">Buscar curso: </label>
                                <input type="text" className="form-control" placeholder="ingrese nombre del curso"/>
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