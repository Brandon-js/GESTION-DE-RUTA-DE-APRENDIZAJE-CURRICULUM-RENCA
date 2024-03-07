import React from 'react'
import './Cursos_portada.css'
import imgCursos from '../../assets/portada-cursos.png'

const Cursos_portada = () => {
    return (
        <>

            <div className="col-12">
                <img className=" mb-3 img-fluid" src={imgCursos} alt="Imagen quiénes somos" id="imagen-cursos-portada"  />
            </div>
            <div className="container order" id="portada">

                <div className="row contenedor align-items-center">


                    <div className="col-md-6" id="titulo-portada">
                        <div className="mb-5 text-center">
                            <h1 >EXCEL COMPLETO</h1>
                            <p>
                                Con cursos al alcance de un CLICK
                            </p>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}



export default Cursos_portada