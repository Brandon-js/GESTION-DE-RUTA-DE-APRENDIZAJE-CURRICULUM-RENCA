import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo-renca.png'


const Navbar = () => {
  return (
    <header>
        <nav className='nav-style nav navbar-expand-lg container-fluid p-4'>
            <div className='row'>
                <div>
                    <img src={logo} />
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar