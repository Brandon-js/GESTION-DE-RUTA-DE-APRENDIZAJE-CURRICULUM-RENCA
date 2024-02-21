import React from 'react';
import './Login.css';

function Login({ closeModal }) {
  return (
    <div className="login-container">
      <div className="overlay"></div> {/* Fondo semitransparente */}
      <div className="login-content slide-in-right">
        <button onClick={closeModal} className="close-button">&times;</button>
        
        <div className="container d-flex align-items-center justify-content-center">
          <div className="p-5">
            <h1 className="font-weight-bold mb-3 text-center display-5">¡Bienvenido de nuevo!</h1>
            <div className="form-group d-flex flex-column align-items-center">
              <button className="btn btn-login btn-sm btn-block mb-3" id='botong'><i className="icon ion-logo-google lead align-start mr-2 google-login logo"></i><span id='textoboton1' >Continuar con Google</span></button>
              <button className="btn btn-login btn-sm btn-block mb-3" id='botonf'><i className="icon ion-logo-facebook lead align-middle mr-2 facebook-login logo"></i><span id='textoboton2'>Continuar con Facebook</span></button>
              <button className="btn btn-login btn-sm btn-block mb-3" id='botona'><i className="icon ion-logo-apple lead align-middle mr-2 apple-login logo"></i><span id='textoboton3' >Continuar con Apple</span></button>
            </div>
            <div className="form-group mb-5 mt-2">
              <div className="horizontal-line-container">
                <hr className="separator"/>
                <div className="circle"></div>
                <hr className="separator"/>
              </div>
            </div>
            <form>
              <div className="form-group mb-3">
                <label htmlFor="email" className="font-weight-bold">Correo electrónico <span className="text-danger">*</span></label>
                <input id="email" type="email" className="form-control2" placeholder="Ingresa tu correo electrónico"/>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password" className="font-weight-bold">Contraseña <span className="text-danger">*</span></label>
                <input id="password" type="password" className="form-control2" placeholder="Ingresa una contraseña"/>
              </div>
              <div className="recordar">¿Olvidaste tu contraseña?</div>
              <button type="submit" className="btn btn-primary btn-block" id='botoniniciar'>INICIAR SESIÓN</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
