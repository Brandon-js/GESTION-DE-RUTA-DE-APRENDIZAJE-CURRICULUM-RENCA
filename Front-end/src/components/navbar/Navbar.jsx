import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo-renca.png';
import Boton_2 from '../botones/Boton_2';
import Empty_button from '../botones/Empty_button';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import Darkmode from './Darkmode';
import Login from '../login/Login'; // Asume que Login es el componente del modal

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);


  return (
    <header className='container-fluid'>
      <nav className='nav-style row'>
        <div className='col-2'>
          <Link to='/'>
            <img src={logo} className='img-fluid img-style' alt='logo-renca'/>
          </Link>
        </div>
        <div className='col-4'>
          <Navigation/>
        </div>
        <div className='col-2'>
          <Darkmode/>
        </div>
        <div className='col-4 text-end'>
          {/* Modifica este enlace para abrir el modal en lugar de navegar */}
          <button onClick={toggleModal} className='your-button-class'>
            INICIAR SESIÓN
          </button>
          <Link to="/registro">
            <Boton_2 text='REGISTRARME'/>
          </Link>
        </div>
      </nav>
      {isModalOpen && <Login closeModal={toggleModal} />}
    </header>
  )
}

export default Navbar;
