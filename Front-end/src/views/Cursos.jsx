import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Cursos_portada from '../components/sections/cursos_portada'
import SobreNosotros from '../components/sections/Contenedor_infocurso'
import Linea_cursos from '../components/sections/linea_cursos'
import Carousel_cards from '../components/carousel/Carousel_cards'
import Footer from '../components/footer/Footer'

const Cursos = () => {
  return (
    <>
    <Navbar/>
    <Cursos_portada/>
    <Linea_cursos/>
    <SobreNosotros/>
    <div className="container">
      <h2>Cursos recomendados para ti</h2>;
      <p>Explora los cursos.</p>
    </div>
    <Carousel_cards id={'idCarrusel-3'}/>
    <Footer/>


    </>
  )
}




export default Cursos