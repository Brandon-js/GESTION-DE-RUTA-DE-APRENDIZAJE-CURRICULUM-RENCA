import React from 'react'
import ProgresDash from '../components/curso-progreso/ProgresDash'
import '../components/curso-progreso/DashBoard.css'
import BotonCursos from '../components/curso-progreso/BotonCursos'
import '../components/curso-progreso/BotonCursos.css'
import SideBar from '../components/side-bar/SideBar'
import SidenavUser from '../components/SidenavUser/SidenavUser'

function DashBoard() {
  return (
    <>
    
    <div className='row'>
    <div className='col-3'>
        <SidenavUser />
    </div>


    <div id='dentro' className='col-9'>
        <div id='bienvenida' className='row'>
            <h3>Bienvenido!!</h3>
            <p>Recuerda que siempre puedes aprender algo nuevo cada dia!</p>
        </div>
        <div id='estado-curso' className='row'>
            <div id='verde' className='col'>
            <BotonCursos colorfondo="rgb(146, 212, 52)" cantidad="7" estadoCurso="Cursos completos" />
            </div>
            <div id='naranja' className='col'>
            <BotonCursos colorfondo="orange" cantidad="3" estadoCurso="Cursos en progreso" />
            </div>
            <div id='azul' className='col'>
            <BotonCursos colorfondo="#0290cd" cantidad="10" estadoCurso="Cursos inscritos"/>
            </div>      
        </div>
        
        <div>
            <ProgresDash tituloCurso ="Crea tu propio CV" porcentajeInicial={50} />
            <ProgresDash tituloCurso ="Excel" porcentajeInicial={85}/>
            <ProgresDash tituloCurso ="Cueca brava" porcentajeInicial={70}/>
            <ProgresDash tituloCurso ="Discurso poeta" porcentajeInicial={60}/>
        </div>
    </div>
    </div>

    </>
  )
}

export default DashBoard