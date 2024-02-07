import React from 'react'
import '../botones/botones.css'

const Boton_special = (param,link) => {
    return (
        <>
            <button className='btn-special'>
                {param.text}
            </button>
        </>
    )
}

export default Boton_special