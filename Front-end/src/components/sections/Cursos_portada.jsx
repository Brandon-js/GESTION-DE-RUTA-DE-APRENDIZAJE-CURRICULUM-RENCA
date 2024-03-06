import React from 'react'
import './Cursos_portada.css'

const Cursos_portada = () => {
  return (
    <>
    
  <div className="container order">
  <div className="row contenedor align-items-center">
      <div className="col-md-6">
          <img className="img-fluid mb-3" src={About_us} alt="Imagen quiénes somos" />
      </div>

      <div className="col-md-6">
          <div className="mb-5 text-center">
              <h1 id="about">APRENDE Excel</h1>
              <p>
              Con cursos al alcance de un CLICK
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
    </>
 )
}



export default Cursos_portada