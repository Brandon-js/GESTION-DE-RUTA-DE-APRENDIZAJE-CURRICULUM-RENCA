import React, {useState} from 'react'
import './Catalogo_portada.css'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import imgPortada from '../../assets/portada_catalogo.jpg'
import iconLaptop from '../../assets/laptop-solid.svg'
import iconLanguage from '../../assets/language-solid.svg'


const Catalogo_portada = () => {

    const cambiarColor = () => {
        console.log('prueba');
    }

    return (
    <>
        <div className='contenedor-portada'>
            <div className='col-12' id='div-img-portada'>
                <img id='img-portada' src={imgPortada} className='img-fluid' />
            </div>
            <div>
                <Breadcrumb />
            </div>
            <div className='container col-12 text-center align-items-center' id='cont-portada'>
                <h1>NUESTRO CATÁLOGO</h1>
                <p>¡Explora nuestro catálogo de cursos y da el primer paso hacia tu éxito educativo!</p>
                <div className='searchbar'>
                    <form class="d-flex align-items-center" role="search">
                    <input id='form-catalogo' class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                    <svg id='pointer-search' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={'30px'}><path fill="#ffffff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                    </form>
                </div>
            </div>
        </div>

        <div className='container d-none' id='cat-bar'>
            <div>
                    {/* icono 1 */}
                    <svg xmlns="http://www.w3.org/2000/svg" className='icons' width="60" height="50" viewBox="0 0 640 512" onMouseDown={cambiarColor}>
                        <path fill="#000000"
                            d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z" />
                    </svg>
                    {/* icono 2 */}
                    <svg xmlns="http://www.w3.org/2000/svg" className='icons' width="50" height="47" 
                        class="bi bi-person-arms-up" viewBox="0 0 16 16">
                        <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" fill="#000000"/>
                        <path
                            d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z" />
                    </svg>
                    {/* icono 3 */}
                    <svg xmlns="http://www.w3.org/2000/svg" className='icons' width="50" height="50" viewBox="0 0 512 512"><path fill="#000000" d="M228.3 469.1L47.6 300.4c-4.2-3.9-8.2-8.1-11.9-12.4h87c22.6 0 43-13.6 51.7-34.5l10.5-25.2 49.3 109.5c3.8 8.5 12.1 14 21.4 14.1s17.8-5 22-13.3L320 253.7l1.7 3.4c9.5 19 28.9 31 50.1 31H476.3c-3.7 4.3-7.7 8.5-11.9 12.4L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9zM503.7 240h-132c-3 0-5.8-1.7-7.2-4.4l-23.2-46.3c-4.1-8.1-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-41.4 82.8L205.9 158.2c-3.9-8.7-12.7-14.3-22.2-14.1s-18.1 5.9-21.8 14.8l-31.8 76.3c-1.2 3-4.2 4.9-7.4 4.9H16c-2.6 0-5 .4-7.3 1.1C3 225.2 0 208.2 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141C165 36.5 211.4 51.4 244 84l12 12 12-12c32.6-32.6 79-47.5 124.6-39.9C461.5 55.6 512 115.2 512 185.1v5.8c0 16.9-2.8 33.5-8.3 49.1z"/></svg>
                    {/* icono 4 */}
                    <svg xmlns="http://www.w3.org/2000/svg" className='icons' width="50" height="50" style={{marginLeft:'20px'}} viewBox="0 0 640 512"><path fill="#000000" d="M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z"/>
                    </svg>
                    {/* icono default */}
                    <svg xmlns="http://www.w3.org/2000/svg" className='icons' width="50" height="50" viewBox="0 0 576 512"><path fill="#000000" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    {/* icono 5 */}
                    <svg xmlns="http://www.w3.org/2000/svg" className='icons' width="50" height="50"
                        viewBox="0 0 448 512">
                        <path fill="#000000"
                            d="M32 192V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16V88c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16V88c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16V192c0 10.1-4.7 19.6-12.8 25.6L352 256l16 144H80L96 256 44.8 217.6C36.7 211.6 32 202.1 32 192zm176 96h32c8.8 0 16-7.2 16-16V224c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c0 8.8 7.2 16 16 16zM22.6 473.4L64 432H384l41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6H38.6C26.1 512 16 501.9 16 489.4c0-6 2.4-11.8 6.6-16z" />
                    </svg>
                    {/* icono 6 */}
                    <svg xmlns="http://www.w3.org/2000/svg" className='icons' width="60" height="50"
                        viewBox="0 0 576 512">
                        <path fill="#000000"
                            d="M282.6 78.1c8-27.3 33-46.1 61.4-46.1H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H344L238.7 457c-3.6 12.3-14.1 21.2-26.8 22.8s-25.1-4.6-31.5-15.6L77.6 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H77.6c22.8 0 43.8 12.1 55.3 31.8l65.2 111.8L282.6 78.1zM393.4 233.4c12.5-12.5 32.8-12.5 45.3 0L480 274.7l41.4-41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L525.3 320l41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L480 365.3l-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 320l-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3z" />
                    </svg>
                    {/* icono 7 */}
                    <svg xmlns="http://www.w3.org/2000/svg" className='icons' width="50" height="50"
                        viewBox="0 0 448 512">
                        <path fill="#000000"
                            d="M288 0H160 128C110.3 0 96 14.3 96 32s14.3 32 32 32V196.8c0 11.8-3.3 23.5-9.5 33.5L10.3 406.2C3.6 417.2 0 429.7 0 442.6C0 480.9 31.1 512 69.4 512H378.6c38.3 0 69.4-31.1 69.4-69.4c0-12.8-3.6-25.4-10.3-36.4L329.5 230.4c-6.2-10.1-9.5-21.7-9.5-33.5V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H288zM192 196.8V64h64V196.8c0 23.7 6.6 46.9 19 67.1L309.5 320h-171L173 263.9c12.4-20.2 19-43.4 19-67.1z" />
                    </svg>
                    {/* icono 8 */}
                    <svg class="" xmlns="http://www.w3.org/2000/svg" className='icons' width="50" height="50"
                        viewBox="0 0 512 512">
                        <path fill="#000000"
                            d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
                    </svg>
            </div>
        </div>
        

        {/* Responsive categories:responsive */}
        <div className="carousel slide align-items-center" id="testCarousel">
            <div className="carousel-inner">
            
                <div className="carousel-item active row">

                    <div className="col-4">
                        <img src={iconLaptop} style={{width:'40px'}}/>
                    </div>

                    <div className="col-4">
                        Prueba
                    </div>
                
                    
                    <div className="col-4">
                        <img src={iconLanguage} style={{width:'40px'}}/>
                    </div>
                
                </div>

            </div>

            <button className="carousel-control-prev" type="button" data-bs-target={'#testCarousel'} data-bs-slide="prev">
                <span className="carousel-control-prev-icon prev" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={'#testCarousel'} data-bs-slide="next">
                <span className="carousel-control-next-icon next" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
            </button>
        </div>

    </>
    )
}

export default Catalogo_portada