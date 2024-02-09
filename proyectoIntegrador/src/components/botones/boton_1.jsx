import React from 'react'
import '../botones/botones.css'

const Boton_1 = (props) => {
    return (
        <>
            <button className='btn-primario'>
                {props.text}
            </button>
        </>
    )
}

export default Boton_1