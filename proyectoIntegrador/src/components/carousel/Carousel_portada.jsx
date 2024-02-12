import React from 'react'
import Boton_1 from '../botones/Boton_1'
import Boton_2 from '../botones/Boton_2'
import './Carousel_portada.css'

const Carousel_portada = () => {
  return (
    <div className="container text-center carousel-portada">
        <div class="row align-items-center">
            <div class="col-5 ">
                <div class="col">
                    <h2>APRENDE CON NOSOTROS</h2>
                    <p>Descubre el poder de tu mente y despierta el conocimiento que te transformará. ¡Bienvenido a un viaje donde cada lección es una puerta abierta hacia un futuro lleno de posibilidades! Aprender con nosotros es el primer paso hacia tu grandeza.</p>
                    <div class="col align-items-center">
                        <Boton_2 text={'Únete ahora'}/>
                        <Boton_1 text={'Explorar cursos'}/>
                    </div>
                </div>
            </div>
            <div class="col-7">
                <div id="carouselPortada" className="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselPortada" data-bs-slide-to="0"
                            class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselPortada" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselPortada" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img id="study_1" src="/img/istockphoto-1394658823-2048x2048.jpg" class="d-block" alt="imagen portada 1" />
                        </div>
                        <div class="carousel-item">
                            <img id="study_2" src="/img/istockphoto-1394658823-2048x2048.jpg" class="d-block" alt="imagen portada 2" />
                        </div>
                        <div class="carousel-item">
                            <img id="study_3" src="/img/istockphoto-1394658823-2048x2048.jpg" class="d-block" alt="imagen portada 3" />
                        </div>
                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
)}

export default Carousel_portada