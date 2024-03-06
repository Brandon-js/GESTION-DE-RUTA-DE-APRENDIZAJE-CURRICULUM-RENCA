import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Cursos_portada from '../components/sections/cursos_portada'
import SobreNosotros from '../components/sections/Contenedor_infocurso'
import Carousel_cards from '../components/carousel/Carousel_cards'
import Footer from '../components/footer/Footer'
import SobreElInstructor from '../components/sections/Sobre-el-instructor'
import Boton_2 from '../components/botones/Boton_2'
import './Cursos.css'

const Cursos = () => {
  return (
    <>
    <Navbar/>
    <Cursos_portada/>
    <SobreNosotros/>
    <SobreElInstructor/>

    <div className="container">
      <h2>Cursos recomendados para ti</h2>;
      
    </div>
    <Carousel_cards id={'idCarrusel-3'}/>
    <div className="container">
    <Boton_2 text={'Explorar Cursos'} className={'btn-styles btn-styles2 text-center'}/>
    </div>
    <Footer/>


    </>
  )
}




export default Cursos