import React from "react";
import { useEffect, useState } from "react";
import Card_1 from "../cards/Card_1";
import img_card from "../../assets/card.png";
import "./Carousel_portada.css";
import "./Carousel_cards.css";

const Carousel_cards = (props) => {
  // Esto recibe un prop (un ID) el cual servirá para darle la interactividad de cambiar la seccion del carrusel
  const idCarousel = props.id;


  // Peticion GET
  const [cursos, getCursos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/cursos")
      .then((response) => response.json())
      .then((data) => getCursos(data))
      .catch((error) => console.log("Error:", error));
  }, []);



  return (
    <>
      <div className="carousel slide" id={idCarousel}>
        <div className="carousel-inner">

          <div className="carousel-item active">
            <div className="container text-center">
              <div className="row text-center">
              {cursos.slice(0,3).map((curso, i) => (
                  <Card_1 key={curso.id} aditionalClassName={`cardstyle${i + 1} ${i + 1 === 2 ? 'd-none d-md-block' : i + 1 === 3 ? 'd-none d-lg-block' : ''}`} imagen={curso.imagenUrl} alt={'imagen curso'} title={curso.titulo} description={curso.descripcion} />
                ))}
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container text-center">
              <div className="row text-center">
              {cursos.slice(1,4).map((curso, i) => (
                  <Card_1 key={curso.id} aditionalClassName={`cardstyle${i + 1} ${i + 1 === 2 ? 'd-none d-md-block' : i + 1 === 3 ? 'd-none d-lg-block' : ''}`} imagen={curso.imagenUrl} alt={'imagen curso'} title={curso.titulo} description={curso.descripcion} />
                ))}
              </div>
            </div>
          </div>

        </div>

          {/* <div className="carousel-item">
            <div className="d-block">
              <div className="container text-center">
                <div className="row text-center">
                {cursos.map((i) => (
                  <div key={i.id}>
                    <Card_1 aditionalClassName="first-card" imagen={i.imagenUrl} alt={'imagen curso'} title={i.titulo} description={i.descripcion} />
                  </div>
                  )
                    )}
                </div>
              </div>
            </div>
          </div> */}
        

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={"#" + idCarousel}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon prev"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={"#" + idCarousel}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon next"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Siguiente</span>
          
        </button>
      </div>
    </>
  );
};

export default Carousel_cards;
