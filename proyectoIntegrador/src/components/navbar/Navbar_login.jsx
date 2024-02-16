import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo-renca.png'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'
import user from '../../assets/icon-user.png'
import exit from '../../assets/icon-exit.png'

const Navbar_login = () => {
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
                <div className='col-4 text-end icon-cont'>
                <Link to='/dashboard-user'>
                  <img src={user} />
                </Link>
                <Link to>
                  <img src={exit} />
                </Link>
                </div>
        </nav>
    </header>
  )
}

export default Navbar_login