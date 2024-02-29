import React, { useState, useEffect } from 'react';
import './Registro.css';
import Modal from '../components/Modal/Modal';

function Registro() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Inicialización de Google Sign-In
    const initializeGoogleSignIn = () => {
      window.gapi.load('auth2', () => {
        window.gapi.auth2.init({
          client_id: '313190689631-vnufi2r3vglcph93lgke5v3hq53f362j.apps.googleusercontent.com',
        });
      });
    };
  
    initializeGoogleSignIn();
  
    // Inicialización de Facebook SDK
    const initializeFacebookSDK = () => {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId      : '421271453598438', // Reemplaza {your-app-id} con tu ID de Aplicación de Facebook
          cookie     : true,
          xfbml      : true,
          version    : 'v11.0' // Usa la versión de la API de Facebook que prefieras
        });
        
        window.FB.AppEvents.logPageView();   
      };
  
      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "https://connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
    };
  
    initializeFacebookSDK();
  }, []);
  

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleGoogleSignIn = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn()
      .then(user => {
        // Aquí puedes manejar la respuesta de inicio de sesión exitoso
        const profile = user.getBasicProfile();
        console.log('Usuario autenticado:', profile.getName());
      })
      .catch(error => {
        // Aquí puedes manejar errores de inicio de sesión
        console.error('Error al iniciar sesión:', error);
      });
  };

  const handleFacebookSignIn = () => {
    window.FB.login(function(response) {
      if (response.authResponse) {
        console.log('Welcome!  Fetching your information.... ');
        window.FB.api('/me', {fields: 'name,email'}, function(response) {
          console.log('Good to see you, ' + response.name + '.');
          // Aquí puedes manejar la respuesta, como guardar el token de acceso y los datos del usuario
        });
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    }, {scope: 'email'});
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
                <button className="btn btn-outline-light btn-google btn-sm btn-block mb-3" onClick={handleGoogleSignIn}><i className="icon ion-logo-google lead align-middle mr-2"></i> Continuar con Google</button>
                <button className="btn btn-outline-light btn-facebook btn-sm btn-block mb-3" onClick={handleFacebookSignIn}><i className="icon ion-logo-facebook lead align-middle mr-2"></i> Continuar con Facebook</button>
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
