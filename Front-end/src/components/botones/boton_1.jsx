import React from 'react'
import '../botones/botones.css'

/* Boton Naranja Oscuro */
const Boton_1 = (props) => {
    return (
        <>
            <button className={`btn-primario ${props.class}`}>
                {props.text}
            </button>
        </>
    )
}

export default Boton_1