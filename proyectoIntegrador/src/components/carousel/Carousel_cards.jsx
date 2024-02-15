import React from 'react'
import Card_1 from '../cards/Card_1'
import img_card from '../../assets/card.png'
import './Carousel_portada.css'

const Carousel_cards = (props) => {
  
  // Esto recibe un prop (un ID) el cual servirá para darle la interactividad de cambiar la seccion del carrusel
  const idCarousel = props.id
  
  return (
    <>
    <div className="carousel slide" id={idCarousel}>
        <div className="carousel-inner">

          <div className="carousel-item active">
              <div class="container text-center">
                <div class="row text-center">
                  <Card_1 imagen={img_card} alt={'imagen curso'} title={'Excel desde 0'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies, felis ac molestie laoreet, lacus erat varius quam, in egestas risus ante in metus. Donec nec ipsum quis eros accumsan.'} />
                  <Card_1 imagen={img_card} alt={'imagen curso'} title={'Excel desde 0'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies, felis ac molestie laoreet, lacus erat varius quam, in egestas risus ante in metus. Donec nec ipsum quis eros accumsan.'} />
                  <Card_1 imagen={img_card} alt={'imagen curso'} title={'Excel desde 0'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies, felis ac molestie laoreet, lacus erat varius quam, in egestas risus ante in metus. Donec nec ipsum quis eros accumsan.'} />
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="d-block">
              <div className="container text-center">
                <div className="row text-center">
                <Card_1 imagen={img_card} alt={'imagen curso'} title={'Excel desde 0'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies, felis ac molestie laoreet, lacus erat varius quam, in egestas risus ante in metus. Donec nec ipsum quis eros accumsan.'} />
                <Card_1 imagen={img_card} alt={'imagen curso'} title={'Excel desde 0'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies, felis ac molestie laoreet, lacus erat varius quam, in egestas risus ante in metus. Donec nec ipsum quis eros accumsan.'} />
                <Card_1 imagen={img_card} alt={'imagen curso'} title={'Excel desde 0'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies, felis ac molestie laoreet, lacus erat varius quam, in egestas risus ante in metus. Donec nec ipsum quis eros accumsan.'} />
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div>
              <div class="container text-center">
                <div class="row text-center">
                <Card_1 imagen={img_card} alt={'imagen curso'} title={'Excel desde 0'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies, felis ac molestie laoreet, lacus erat varius quam, in egestas risus ante in metus. Donec nec ipsum quis eros accumsan.'} />
                <Card_1 imagen={img_card} alt={'imagen curso'} title={'Excel desde 0'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies, felis ac molestie laoreet, lacus erat varius quam, in egestas risus ante in metus. Donec nec ipsum quis eros accumsan.'} />
                <Card_1 imagen={img_card} alt={'imagen curso'} title={'Excel desde 0'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies, felis ac molestie laoreet, lacus erat varius quam, in egestas risus ante in metus. Donec nec ipsum quis eros accumsan.'} />
                </div>
              </div>
            </div>
          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target={'#' + idCarousel} data-bs-slide="prev">
          <span className="carousel-control-prev-icon prev" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={'#' + idCarousel} data-bs-slide="next">
          <span className="carousel-control-next-icon next" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>

      </div>
      </>
  )
}

export default Carousel_cards