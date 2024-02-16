import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo-renca.png'
import Boton_2 from '../botones/Boton_2'
import Empty_button from '../botones/Empty_button'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

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
                  <Empty_button text={'INICIAR SESIÓN'} />
                  <Link to="/registro">
                  <Boton_2 text='REGISTRARME'/>
                  </Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar