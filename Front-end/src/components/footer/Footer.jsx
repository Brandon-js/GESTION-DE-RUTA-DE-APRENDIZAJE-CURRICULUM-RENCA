import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo-renca.png'
import footerR from '../../assets/footer2.png'
import footerL from '../../assets/footer.png'
import "./Footer.css"


const Footer = () => {
  return (
    <>
    <div class="container-fluid  mt-5">
      <div className='row'>
        <div className='col-12 col-md-5 text-center'>
          <img src={footerL} className='img-fluid ' alt='footer' />
        </div>
        <div className='d-none d-md-block col-md-2 text-center'>
          <img id='logo-footer' src={logo} className='img-fluid' width='100%' alt='footer-logo-renca'/>
        </div>
        <div className='d-none d-md-block col-md-5 text-center '>
          <img src={footerR} className='img-fluid'alt='footer'/>
        </div>
      </div>

      <div class="container mt-4">

        <div className='row text-center'>


        <div class="row col-md-6 justify-content-center align-items-center mb-4">
          <div class="col-12 row mx-auto text-center">
            <div className='col-2 col-xl-1'>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width:'30px'}} viewBox="0 0 576 512"><path fill='#0ab5fd' d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
              </div>
              <div className='col-10 col-xl-11 text-start'>
              <p>Blanco Encalada N*1335, Plaza de Renca, Renca.</p>
              </div>
          </div>

          <div class="col-12 row mx-auto text-center ">
            <div className='col-2 col-xl-1'>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width:'30px'}} viewBox="0 0 512 512"><path fill="#fda22d" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
            </div>
            <div className='col-10 col-xl-11 text-start'>
                <p>+56 2 2685 6600</p>
            </div>
          </div>

          <div class="col-12 row mx-auto text-center">
            <div className='col-2 col-xl-1'>
            <svg xmlns="http://www.w3.org/2000/svg" style={{width:'30px'}} viewBox="0 0 512 512"><path fill="#fd571e" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>              </div>
              <div className='col-10 col-xl-11 text-start'>
              <p>contacto@renca.cl</p>
              </div>
          </div>

          <div class="col-12 row mx-auto text-center">
            <div className='col-2 col-xl-1'>
            <svg xmlns="http://www.w3.org/2000/svg" style={{width:'30px'}} viewBox="0 0 512 512"><path fill="#02edca" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>              </div>
              <div className='col-10 col-xl-11 text-start'>
              <p>Lunes a Viernes de 08:30 a 14:00 y 15:00 a 17:00</p>
              </div>
          </div>

        </div>
    
    
        <div class="row col-md-6 ">
              <div className="col-12 mb-4 nav-footer">
                <li class="nav-item"><Link to='/preguntas-frecuentes'>Preguntas Frecuentes</Link></li>
              </div>
              <div className='col-12 mb-4 nav-footer'>
                <li class="nav-item"><Link to='/catalogo'>Explora Nuestros Cursos</Link></li>
              </div>
              <div className='col-12 mb-4 nav-footer'>
                <li class="nav-item"><a href='#qs-section'>Sobre Nosotros</a></li>
              </div>
              <div className='col-12 mb-4 nav-footer'>
                <li class="nav-item"><Link to='/preguntas-frecuentes'>Contáctanos</Link></li>
              </div>          
        </div>
        

          <div id='final-footer' class="container d-flex align-items-center justify-content-center text-center">
            <Link id='imr' className='align-items-center' to='https://renca.cl/'>
              <p>© 2024 Ilustre Municipalidad de Renca</p>
            </Link>
          </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Footer