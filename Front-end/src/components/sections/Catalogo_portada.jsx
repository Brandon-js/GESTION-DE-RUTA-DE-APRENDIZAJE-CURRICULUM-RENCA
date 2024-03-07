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
    const [currentColor, setCurrentColor] = useState('#000000');
    const [isHovered, setIsHovered] = useState(false);

    const changeColor = () => {
        const newColor = '#88a61b';
        setCurrentColor(newColor);
        setIsHovered(true);
    }

    const resetColor = () => {
        setCurrentColor('#000000');
        setIsHovered(false);

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

                        <div className="col-3 text-end">
                        <svg className={`icon-categorias ${isHovered ? 'hovered' : ''}`} onMouseOver={changeColor} onMouseOut={resetColor} xmlns="http://www.w3.org/2000/svg" style={{ width: isHovered ? '45px' : '40px' }} viewBox="0 0 576 512"><path fill={currentColor} d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                        </div>

                        <div className="col-3 text-center">
                            <img className='ms-4 icons' src={iconLaptop} style={{width:'40px'}} alt='categoría tecnolgía'/>
                        </div>

                        <div className="col-3 text-center">
                            <img className='me-4 icons' src={iconLanguage} style={{width:'40px'}} alt='categoría lenguaje e idiomas'/>
                        </div>

                
                        <div className="col-3 text-start">
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