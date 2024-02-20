import React from 'react'
import SideBoton from './SideBoton'
import logo from '../../assets/logo-renca.png'
import './SideBar.css'

function SideBar() {
  return (
    <>  

<body id='sideNavColor'>

        <div className='row'>
        <div>
        <img className='img-fluid'  src={logo}></img>
        </div>
        <SideBoton />
        <SideBoton />
        <SideBoton />
        <SideBoton />
        <button className='cerrar-sesion' >Cerrar sesion</button>
        </div>
</body>

  
    </>
  )
}

export default SideBar

