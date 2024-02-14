import React from 'react'
import '../botones/botones.css'

const Boton_3 = (props) => {
    return (
        <>
            <button className='btn-cuaternario'>
                {props.text}
            </button>
        </>
    )
}

export default Boton_3