import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Boton_2 from "../botones/Boton_2";
import { Link } from 'react-router-dom';
import './Carousel_portada.css'
import Boton_3 from '../botones/Boton_3';
import ImgPortada from "../../assets/portada1.jpg";
import ImgPortada2 from "../../assets/portada2.jpg";


const Carousel_portada = () => {

  return (
<div className="container text-center front-page">
    <Row className="align-items-center flex-column-reverse flex-md-row">
        <Col xs={12} md={6}>
                <h2>APRENDE CON NOSOTROS</h2>
                <p>Descubre el poder de tu mente y despierta el conocimiento que te transformará. ¡Bienvenido a un viaje donde cada lección es una puerta abierta hacia un futuro lleno de posibilidades! Aprender con nosotros es el primer paso hacia tu grandeza.</p>
                <div className="col align-items-center">
                    <Link to="/registro">
                    <Boton_3 id='btn3' text={'Únete ahora'} class={'btn-styles btn-styles1'}/>
                    </Link>
                    <Link to="/catalogo">
                        <Boton_2 id='btn2' text={'Explorar cursos'} class={'btn-styles btn-styles2'}/>
                    </Link>
                </div>
        </Col>
        <Col xs={12} md={6}>
            <div id="carouselPortada" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselPortada" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselPortada" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselPortada" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={ImgPortada} className="d-block w-100" alt="imagen portada 1" />
                    </div>
                    <div className="carousel-item">
                        <img src={ImgPortada2} className="d-block w-100" alt="imagen portada 2" />
                    </div>
                    <div className="carousel-item">
                        <img src={ImgPortada} className="d-block w-100" alt="imagen portada 3" />
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselPortada" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselPortada" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </Col>
    </Row>
</div>

)}

export default Carousel_portada