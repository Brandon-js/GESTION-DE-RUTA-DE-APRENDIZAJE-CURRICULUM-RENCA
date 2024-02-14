import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Carousel_portada from '../components/carousel/Carousel_portada'
import Data_home from '../components/sections/Data_home'
import Quienes_somos from '../components/sections/Quienes_somos'
import Card_1 from '../components/cards/Card_1'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Carousel_portada />
    <Data_home />
    <Quienes_somos />
    <Card_1 imagen='../assets/card.png' alt='imagen curso' title='ejemplo' description='hola soy un card' button='click me'/>
    </>
  )
}

export default Home