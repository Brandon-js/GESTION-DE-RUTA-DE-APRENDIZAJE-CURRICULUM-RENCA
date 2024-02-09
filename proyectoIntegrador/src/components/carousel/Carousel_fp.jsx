import React from 'react'

const Carousel_fp = () => {
  return (
    <div class="container text-center">
        <div class="row align-items-center">
            <div class="col-4 ">
                <div class="col"><br/>
                    <h2 id="h2-carrusel">APRENDE CON NOSOTROS</h2>
                    <p id="pCarrusel">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur esse illum.
                    </p>
                    <div class="col d-flex align-items-center">
                        <button id="botonCarrusel-1" type="button" style="margin: 20px" class="btn btn-primary btn-lg" onclick="location.href='/catalogo-cursos/catalogo.html'">NUESTROS CURSOS</button>
                        <button id="botonCarrusel-2" type="button" class="btn btn-primary btn-lg " onclick="location.href='registro.html'">¡ÚNETE!</button>
                    </div>
                </div>
            </div>
            <div class="col-8">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img id="study_1" src="/img/istockphoto-1394658823-2048x2048.jpg" class="d-block" alt="studying_1" />
                        </div>
                        <div class="carousel-item">
                            <img id="study_2" src="/img/istockphoto-1394658823-2048x2048.jpg" class="d-block" alt="studying_2" />
                        </div>
                        <div class="carousel-item">
                            <img id="study_3" src="/img/istockphoto-1394658823-2048x2048.jpg" class="d-block" alt="studying_3" />
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
  )
}

export default Carousel_fp