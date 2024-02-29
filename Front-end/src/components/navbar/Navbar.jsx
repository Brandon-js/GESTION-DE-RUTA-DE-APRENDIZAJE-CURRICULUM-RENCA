import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./Navbar.css";
import logo from "../../assets/logo-renca.png";
import Boton_2 from "../botones/Boton_2";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import Login from "../login/Login"; // Asume que Login es el componente del modal

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);


  return (
    <header className="container-fluid sticky-top">
      <nav className='nav-style row'>
        <Col xs={5} md={4} lg={2} className="text-start">
          <Link to="/">
            <img src={logo} className="img-fluid img-style" alt="logo-renca" />
          </Link>
        </Col>
        <Col lg={5} className=" text center d-none d-lg-block">
        <Navigation />
        </Col>

        {/* Modo oscuro */}
        <Col xs={5} md={4} lg={1} className="text-center " id="botones">
                  <button id="sun-btn" className="active-sun light-mode-btn" type="button"
                  >
                    <svg className="sun-icon"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#090e15"
                        d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"
                      />
                    </svg>
                  </button>
                  <button id="moon-btn" className="default-moon" type="button">
                    <svg className="moon-icon"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                    </svg>
                  </button>
        </Col>
        {/* Modo oscuro */}

        {/* Colapsador Responsive */}
        <div className="col-2 col-md-4 text-end d-lg-none">
          <a
            data-bs-toggle="collapse"
            href="#navCollapse"
            role="button"
            aria-expanded="false"
            aria-controls="navCollapse"
          >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={'30px'}><path fill="#0ab5fd" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
          </a>
        </div>
          {/*Contenido colapsed*/}
          <div className="collapse d-lg-none" id="navCollapse">
            <div className="card card-body">
              <Navigation />

              <Row className="text-center justify-content-center log-reg">
                {/* Modifica este enlace para abrir el modal en lugar de navegar */}
                <Col xs={12} sm={5}>
                <button
                  onClick={toggleModal}
                  className="your-button-class nav-coll-btn1"
                >
                  INICIAR SESIÓN
                </button>
                </Col>
                <Col xs={12} sm={6}>
                <Link to="/registro">
                  <Boton_2 text="REGISTRARME" className="nav-coll-btn2" />
                </Link>
                </Col>
              </Row>
            </div>
          </div>
          {/*Contenido colapsed*/}

          <Col lg={4} className="d-none d-lg-block text-end">
            <button id="btn-special" onClick={toggleModal} className="your-button-class nav-btn1">
                    INICIAR SESIÓN
            </button>
            <Link to="/registro" id="btn-test">
              <Boton_2 id="btn-register" text="REGISTRARME" class='nav-btn2'/>
            </Link>
          </Col>
      </nav>
      {isModalOpen && <Login closeModal={toggleModal} />}
    </header>
  );
};

export default Navbar;
