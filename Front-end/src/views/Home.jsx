import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Carousel_portada from '../components/carousel/Carousel_portada'
import Data_home from '../components/sections/Data_home'
import Quienes_somos from '../components/sections/Quienes_somos'
import Footer from '../components/footer/Footer'
import Carousel_cards from '../components/carousel/Carousel_cards'
import { Link } from 'react-router-dom'
import Boton_2 from '../components/botones/Boton_2'
import Aprende_ritmo from '../components/sections/Aprende_ritmo'
import Navbar_login from '../components/navbar/Navbar_login'


const Home = () => {
  return (
    <>
    <Navbar/>
    <Carousel_portada />
    <Data_home />
    <Quienes_somos />
    <div className="container">
      <h2>Cursos populares</h2>
      <p>Explora los cursos favoritos de nuestros usuarios.</p>
    </div>
    <Carousel_cards id={'idCarrusel-1'}/>
    <div className="container mt-4">
      <h2>Nuevos cursos</h2>
      <p>Descubre los cursos más recientes de la plataforma.</p>
    </div>
      <Carousel_cards id={'idCarrusel-2'}/>
    <div className='text-center m-4'>
      <Link to="/login">
        <Boton_2 text='Explorar más cursos'/>
      </Link>
    </div>
    <Aprende_ritmo/>
    <Footer />
    </>
  )
}

export default Home