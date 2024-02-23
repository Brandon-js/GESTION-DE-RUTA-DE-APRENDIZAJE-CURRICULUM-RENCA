import React, { useState } from 'react';
import './Registro.css';
import Modal from '../components/Modal/Modal';

function Registro() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <div className="modal-content">
          <h2>Términos y Condiciones</h2>
          <p>Esta plataforma cuenta con cursos exclusivos para residentes de la comuna de Renca, al registrarte confirmas que resides en Renca.

Adicionalmente deberás subir tu registro social de hogares (RSH) para comprobar que cumplas con los requisitos de la página.</p>
        </div>
      </Modal>

      <div className="row">
        <div className="col-md-12 extra-large-screen-top-stripe">
          <div className="stripe-color stripe-color1"></div>
          <div className="stripe-color stripe-color2"></div>
          <div className="stripe-color stripe-color3"></div>
          <div className="stripe-color stripe-color4"></div>
          <div className="stripe-color stripe-color5"></div>
        </div>
      </div>

      <section className="contact-box">
        <div className="row no-gutters bg-dark">
          <div className="col-xl-5 col-lg-12 register-bg">
            <div className="position-absolute"></div>
          </div>
          <div className="col-xl-7 col-lg-12 d-flex">
            <div className="container align-self-center p-6">
              <h1 className="font-weight-bold mb-3 text-center display-5">Crea tu cuenta gratis</h1>
              <h3 className="font-weight-bold text-center h4">¡Comienza a aprender ya!</h3>
              <div className="form-group d-flex flex-column justify-content-center align-items-center">
                <button className="btn btn-outline-light btn-google btn-sm btn-block mb-3"><i className="icon ion-logo-google lead align-middle mr-2"></i> Continuar con Google</button>
                <button className="btn btn-outline-light btn-facebook btn-sm btn-block mb-3"><i className="icon ion-logo-facebook lead align-middle mr-2"></i> Continuar con Facebook</button>
                <button className="btn btn-outline-light btn-apple btn-sm btn-block mb-3"><i className="icon ion-logo-apple lead align-middle mr-2"></i> Continuar con Apple</button>
              </div>
              <div className="form-group mb-5 mt-2">
                <div className="horizontal-line-container">
                  <hr className="separator" />
                  <div className="circle"></div>
                  <hr className="separator" />
                </div>
              </div>
              <form>
                <div className="row mb-2">
                  <div className="form-group col-md-6">
                    <label className="font-weight-bold">Nombre <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" placeholder="Tu nombre" />
                  </div>
                  <div className="form-group col-md-6" id='apellido'>
                    <label className="font-weight-bold">Apellido <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" placeholder="Tu apellido" />
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label className="font-weight-bold">Correo electrónico <span className="text-danger">*</span></label>
                  <input type="email" className="form-control" placeholder="Ingresa tu correo electrónico" />
                </div>
                <div className="form-group mb-3">
                  <label className="font-weight-bold">Contraseña <span className="text-danger">*</span></label>
                  <input type="password" className="form-control" placeholder="Ingresa una contraseña" />
                </div>
                <div className="form-group d-flex justify-content-center mt-5">
                  <button className="btn btn-primary btn-registrarse">REGISTRARME</button>
                </div>
                <div className="custom-checkbox mb-5 d-flex align-items-center">
                  <input className="custom-checkbox-input" type="checkbox" id="privacyCheckbox" />
                  <label className="custom-checkbox-label mb-5 mt-5" htmlFor="privacyCheckbox">
                    Al seleccionar esta casilla aceptas nuestro aviso de privacidad y los <a href="#" onClick={handleOpenModal}>términos y condiciones</a>
                  </label>
                </div>
              </form>
              <small className="d-inline-block text-muted mt-5">Todos los derechos reservados | © 2024 Grupo GO</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Registro;
