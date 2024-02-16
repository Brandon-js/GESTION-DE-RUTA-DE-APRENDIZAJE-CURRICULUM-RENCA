import React from 'react';

function Login(props) {
  return (
    <div className={`root ${props.className} untitled-page`}>
      <div className="content_box2">
        <h5 className="highlight1">¿Olvidaste tu contraseña?</h5>
        <h2 className="medium_title">Bienvenido de nuevo</h2>
        <h2 className="medium_title1">x</h2>
        <hr className="line" size={1} />
        <h5 className="highlight">o</h5>
        <hr className="line1" size={1} />

        <div className="content_box">
          <div className="rect" />
          <div className="rect1" />
          <div className="rect2" />
          <img className="image" src={'/assets/multicolored_google_logo.png'} alt="alt text" />
          <h5 className="highlight2">Continuar con Google</h5>
          <img className="image1" src={'/assets/blue_twitter_bird_logo.png'} alt="alt text" />
          <h5 className="highlight3">Continuar con Facebook</h5>
          <img className="image11" src={'/assets/black_square_placeholder.png'} alt="alt text" />
          <h5 className="highlight4">Continuar con Apple</h5>
        </div>

        <div className="rect11" />
        <h2 className="medium_title11">iniciar sesión</h2>

        <div className="content_box1">
          <h5 className="highlight5">CORREO ELECTRÓNICO</h5>
          <div className="rect3" />
          <h5 className="highlight6">CONTRASEÑA</h5>
          <div className="rect4" />
          <h5 className="highlight21">micorreo@correo.com</h5>
          <h5 className="highlight22">********</h5>
        </div>
      </div>
    </div>
  );
}

export default Login;
