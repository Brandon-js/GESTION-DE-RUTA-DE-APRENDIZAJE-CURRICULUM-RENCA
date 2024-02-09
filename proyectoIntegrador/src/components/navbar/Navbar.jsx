import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo-renca.png'
import Boton_1 from '../botones/boton_1'
import Boton_2 from '../botones/boton_2'
import Boton_special from '../botones/boton_special'
import Navigation from './Navigation'

const Navbar = () => {
  return (
    <header className='container-fluid'>
        <nav className='nav-style row'>
                <div className='col-2'>
                    <img src={logo} className='img-fluid img-style' alt='logo-renca'/>
                </div>
                <div className='col-5'>
                  <Navigation/>
                </div>
                <div className='col-1'></div>
                <div className='col-4 text-end'>
                  <Boton_special text={'INICIAR SESIÓN'} />
                  <Boton_2 text='REGÍSTRATE'/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar