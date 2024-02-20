import React from 'react';
import './Login.css';

function Login(props) {
  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="p-5">
        <h1 className="font-weight-bold mb-3 text-center display-5">¡Bienvenido de nuevo!</h1>
        <div className="form-group d-flex flex-column align-items-center">
  <button className="btn btn-login btn-sm btn-block mb-3"><i className="icon ion-logo-google lead align-middle mr-2 google-login logo"></i> Continuar con Google</button>
  <button className="btn btn-login btn-sm btn-block mb-3"><i className="icon ion-logo-facebook lead align-middle mr-2 facebook-login logo"></i> Continuar con Facebook</button>
  <button className="btn btn-login btn-sm btn-block mb-3"><i className="icon ion-logo-apple lead align-middle mr-2 apple-login logo"></i> Continuar con Apple</button>
</div>


        <div className="form-group mb-5 mt-2">
          <div className="horizontal-line-container">
            <hr className="separator"/>
            <div className="circle"></div>
            <hr className="separator"/>
          </div>
        </div>

        <form className="login-form">
          <div className="form-group mb-3">
            <label htmlFor="email" className="font-weight-bold">Correo electrónico <span className="text-danger">*</span></label>
            <input id="email" type="email" className="form-control2" placeholder="Ingresa tu correo electrónico"/>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password" className="font-weight-bold">Contraseña <span className="text-danger">*</span></label>
            <input id="password" type="password" className="form-control2" placeholder="Ingresa una contraseña"/>
          </div>
          <button type="submit" className="btn btn-primary btn-block">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
