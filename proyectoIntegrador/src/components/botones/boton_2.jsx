import React from 'react'
import '../botones/botones.css'

const Boton_2 = (props) => {
    return (
        <>
            <button className='btn-secundario'>
                {props.text}
            </button>
        </>
    )
}

export default Boton_2