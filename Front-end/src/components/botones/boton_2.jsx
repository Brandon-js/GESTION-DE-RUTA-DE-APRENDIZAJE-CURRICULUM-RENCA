import React from 'react'
import '../botones/botones.css'

/* Boton Azul Renca */
const Boton_2 = (props) => {
    return (
        <>
            <button className={`btn-secundario ${props.class}`}>
                {props.text}
            </button>
        </>
    )
}

export default Boton_2