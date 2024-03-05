import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Catalogo_portada from '../components/sections/Catalogo_portada'
import Card_1 from '../components/cards/Card_1'
import Carousel_cards from '../components/carousel/Carousel_cards'

const Catalogo = () => {
  return (
    <>
    <Navbar/>
    <Catalogo_portada/>
    <h2 className="mt-5 ms-4">Cursos populares</h2>
    <Carousel_cards id={'idCarrusel-4'}/>
    <Carousel_cards id={'idCarrusel-5'}/>
    <Carousel_cards id={'idCarrusel-6'}/>
    <Footer />
    </>
  )
}

export default Catalogo
