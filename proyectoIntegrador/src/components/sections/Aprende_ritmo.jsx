import React from 'react'
import img_aprende from '../../assets/aprende_ritmo.png'
import Boton_2 from '../botones/Boton_2'


const Aprende_ritmo = () => {
  return (
    <div className="container mt-5">
        <div className="row contenedor">
            
            <div className="col-md-6 d-flex align-self-center">
                <div>
                    <h1 className="text-center">APRENDE A TU RITMO</h1>
                        <p className="text-center">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus inventore possimus sit. Consequatur itaque alias, accusantium sit est ducimus doloremque ullam quos ab recusandae veniam ex facere eaque rem nihil.
                        </p>
                    <div className="text-center">
                    <Boton_2 text='REGISTRARME' />
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <img className="img-fluid" src={img_aprende} alt="imagen aprende a tu ritmo" />
            </div>
        </div>
    </div>
  )
}

export default Aprende_ritmo