import React, {useState} from 'react'
import './Catalogo_portada.css'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import imgPortada from '../../assets/portada_catalogo.jpg'
import iconLaptop from '../../assets/laptop-solid.svg'
import iconLanguage from '../../assets/language-solid.svg'
import iconStar from '../../assets/star-solid.svg'
import iconFinance from  '../../assets/finance-solid.svg'
import iconBrain from  '../../assets/brain-solid.svg'
import iconScience from '../../assets/flask-solid.svg'
import iconHeart from '../../assets/heart-solid.svg'
import iconPalette from '../../assets/palette-solid.svg'
import iconEllipsis from '../../assets/ellipsis-solid.svg'


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

        {/* Responsive categories */}
        <div className="carousel slide mt-4 container-fluid d-flex d-md-none text-center align-items-center" id="categoriesCarouselResponsive">
            <div className="carousel-inner text-center">
                {/* Carrusel cat.1 */}
                <div className="carousel-item active">
                    <div className="row align-items-center">
                        <div className="col-4 text-center first-item">
                            <img className='ms-4 icons' src={iconLaptop} style={{width:'40px'}} alt='categoría tecnolgía'/>
                        </div>

                        <div className="col-4 text-center">
                            <img className='icons' src={iconStar} style={{width:'40px'}} alt='categoría cursos populares'/>
                        </div>
                    
                        
                        <div className="col-4 text-center">
                            <img className='me-4 icons' src={iconLanguage} style={{width:'40px'}} alt='categoría lenguaje e idiomas'/>
                        </div>
                    </div>
                </div>
                
                {/* Carrusel cat.2 */}
                <div className="carousel-item">
                    <div className="row align-items-center">
                        <div className="col-4 text-center">
                            <img className='ms-4 icons' src={iconFinance} style={{width:'40px'}} alt='categoría finanzas'/>
                        </div>

                        <div className="col-4 text-center">
                            <img className='icons' src={iconBrain} style={{width:'40px'}} alt='categoría desarrollo personal'/>
                        </div>
                    
                        
                        <div className="col-4 text-center">
                            <img className='me-4 icons' src={iconScience} style={{width:'40px'}} alt='categoría lenguaje e idiomas'/>
                        </div>
                    </div>
                </div>

                {/* Carrusel cat.3 */}
                <div className="carousel-item">
                    <div className="row align-items-center">
                        <div className="col-4 text-center">
                            <img className='ms-4 icons' src={iconHeart} style={{width:'40px'}} alt='categoría salud y fitness'/>
                        </div>

                        <div className="col-4 text-center">
                            <img className='icons' src={iconEllipsis} style={{width:'40px'}} alt='categoría arte'/>
                        </div>
                    
                        
                        <div className="col-4 text-center">
                            <img className='me-4 icons' src={iconPalette} style={{width:'40px'}} alt='categoría otros'/>
                        </div>
                    </div>
                </div>

            </div>
            
            <button className="carousel-control-prev" type="button" data-bs-target={'#categoriesCarouselResponsive'} data-bs-slide="prev">
                <span className="carousel-control-prev-icon prev me-4" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={'#categoriesCarouselResponsive'} data-bs-slide="next">
                <span className="carousel-control-next-icon next ms-4" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
            </button>
        </div>

        {/* Full screen categories */}
        <div className="carousel slide mt-4 container-fluid d-flex d-none d-md-block text-center align-items-center" id="categoriesCarousel">
            <div className="carousel-inner text-center mt-2">
                {/* Carrusel cat.1 */}
                <div className="carousel-item active">
                    <div className="row align-items-center d-flex">

                        <div className="col-3 text-center">
                            <img className='icons' src={iconStar} style={{width:'40px'}} alt='categoría cursos populares'/>
                        </div>

                        <div className="col-3 text-center">
                            <img className='ms-4 icons' src={iconLaptop} style={{width:'40px'}} alt='categoría tecnolgía'/>
                        </div>

                        <div className="col-3 text-center">
                            <img className='me-4 icons' src={iconLanguage} style={{width:'40px'}} alt='categoría lenguaje e idiomas'/>
                        </div>

                
                        <div className="col-3 text-center">
                            <img className='ms-4 icons' src={iconFinance} style={{width:'40px'}} alt='categoría finanzas'/>
                        </div>


                    </div>
                </div>
                
                {/* Carrusel cat.2 */}
                <div className="carousel-item">
                    <div className="row align-items-center d-flex">
                        
                        <div className="col-3 text-center">
                            <img className='me-4 icons' src={iconScience} style={{width:'40px'}} alt='categoría lenguaje e idiomas'/>
                        </div>
  
                        <div className="col-3 text-center">
                            <img className='ms-4 icons' src={iconHeart} style={{width:'40px'}} alt='categoría salud y fitness'/>
                        </div>

                        <div className="col-3 text-center">
                            <img className='icons' src={iconBrain} style={{width:'40px'}} alt='categoría desarrollo personal'/>
                        </div>
                    
                        
                        <div className="col-3 text-center">
                            <img className='me-4 icons' src={iconPalette} style={{width:'40px'}} alt='categoría otros'/>
                        </div>
                    </div>
                </div>

            </div>
            
            <button className="carousel-control-prev" type="button" data-bs-target={'#categoriesCarousel'} data-bs-slide="prev">
                <span className="carousel-control-prev-icon prev me-4" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={'#categoriesCarousel'} data-bs-slide="next">
                <span className="carousel-control-next-icon next ms-4" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
            </button>
        </div>
    </>
    )
}

export default Catalogo_portada