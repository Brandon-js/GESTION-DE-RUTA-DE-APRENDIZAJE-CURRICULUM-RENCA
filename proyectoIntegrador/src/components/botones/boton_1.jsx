import React from 'react'
import '../components/botones.css'

const Boton_1 = (param,link) => {
    return (
        <>
            <button className='btn-primario' onClick={link}>
                {param.text}
            </button>
        </>
    )
}

export default Boton_1