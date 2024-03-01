import React from 'react'
import './SideBoton.css'
function SideBoton(props) {
  return (
    <>
        <button className='SideBoton'>{props.seccion}</button>
    </>
  )
}

export default SideBoton