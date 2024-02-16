import React from 'react'
import logo from '../../assets/logo-renca.png'

const Footer = () => {
  return (
    <>
    <div class="container-fluid row">


    <div class="col-5 row mx-auto justify-content-center align-items-center">
      <div id="bar-1"></div>
      <div id="bar-2"></div>
      <div id="bar-3"></div>
      <div id="bar-4"></div>
      <div id="bar-5"></div>
    </div>

        <div class="container-fluid col-2 text-center">
            <div class="text-center">
                <img class="img-fluid mx-auto" id="logo-renca" src={logo} />
            </div>
        </div>

    <div class="col-5 row mx-auto justify-content-center align-items-center">
      <div id="bar-5"></div>
      <div id="bar-4"></div>
      <div id="bar-3"></div>
      <div id="bar-2"></div>
      <div id="bar-1"></div>
    </div>

    <div id="foot-cont" class="container-fluid row mt-4">


      <div class="col-5 row mx-auto justify-content-center align-items-center">
        <div class="mx-auto text-center">
        <p>Blanco Encalada N*1335, Plaza de Renca, Renca.</p>
        <p>+56 2 2685 6600</p>
        <p>contacto@renca.cl</p>
        <p>Lunes a viernes de 08:30 a 14:00 horas 15:00 a 17:00 horas.</p>
        </div>
      </div>
  
      <div class="container-fluid col-2 text-center ">
        <div class="text-center mx-auto">

          <ul class="list-unstyled list-inline">
            
            <li class="list-inline-item">
               <a href="#" class="text-dark"> <i class="fab fa-facebook"></i></a>
            </li> 
            <li class="list-inline-item">
               <a href="#" class="text-dark"> <i class="fab fa-twitter"></i></a>
            </li>  
            <li class="list-inline-item">
              <a href="#" class="text-dark"> <i class="fab fa-google-plus"></i></a>
            </li> 
            
        </ul>

          </div>
      </div>

      <div class="col-5 row mx-auto justify-content-center align-items-center">
        <div id="foot-r" class="mx-auto text-center">
          <p class="foot-r">Preguntas Frecuentes</p>
          <p class="foot-r">Explora nuestros cursos</p>
          <p class="foot-r">Sobre Nosotros</p>
          <p>Contáctanos</p>
        </div>
      </div>
      

        <div id="foot-cont" class="container text-center mt-5">
            <p>© 2024 Ilustre Municipalidad de Renca</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Footer