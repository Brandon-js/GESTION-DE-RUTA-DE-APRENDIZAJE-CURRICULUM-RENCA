import React from 'react'
import About_us from '../../assets/about_us.jpg'


const Quienes_somos = () => {
    return (
        <div className="container order">
            <div className="row contenedor align-items-center">
                <div className="col-md-6">
                    <img className="img-fluid mb-3" src={About_us} alt="Imagen quiénes somos" />
                </div>

                <div className="col-md-6">
                    <div className="mb-5 text-center">
                        <h1 id="about">¿QUIÉNES SOMOS?</h1>
                        <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus inventore possimus sit. Consequatur itaque alias, accusantium sit est ducimus doloremque ullam quos ab recusandae veniam ex facere eaque rem nihil.
                        </p>
                    </div>

                    <div className="d-flex justify-content-center">
                        <div className="me-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="90px" viewBox="0 0 512 512"><path fill="#a3a5a8" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        </div>
                        <div className="me-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="90px" viewBox="0 0 512 512"><path fill="#a3a5a8" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="90px" viewBox="0 0 512 512"><path fill="#a3a5a8" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quienes_somos