import React from 'react'
import '../botones/botones.css'

const Boton_2 = (param,link) => {
    return (
        <>
            <button className='btn-secundario'>
                {param.text}
            </button>
        </>
    )
}

export default Boton_2