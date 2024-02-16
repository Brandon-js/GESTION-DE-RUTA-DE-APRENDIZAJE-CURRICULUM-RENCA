import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from '../login/Login.css';

function Login(props) {
  return (
    <div className={cn(styles.root, props.className, 'untitled-page')}>
      <div className={styles.content_box2}>
        <h5 className={styles.highlight1}>¿Olvidaste tu contraseña?</h5>
        <h2 className={styles.medium_title}>Bienvenido de nuevo</h2>
        <h2 className={styles.medium_title1}>x</h2>
        <hr className={styles.line} size={1} />
        <h5 className={styles.highlight}>o</h5>
        <hr className={styles.line1} size={1} />

        <div className={styles.content_box}>
          <div className={styles.rect} />
          <div className={styles.rect1} />
          <div className={styles.rect2} />
          <img className={styles.image} src={'/assets/multicolored_google_logo.png'} alt="alt text" />
          <h5 className={styles.highlight2}>Continuar con Google</h5>
          <img className={styles.image1} src={'/assets/blue_twitter_bird_logo.png'} alt="alt text" />
          <h5 className={styles.highlight3}>Continuar con Facebook</h5>
          <img className={styles.image11} src={'/assets/black_square_placeholder.png'} alt="alt text" />
          <h5 className={styles.highlight4}>Continuar con Apple</h5>
        </div>

        <div className={styles.rect11} />
        <h2 className={styles.medium_title11}>iniciar sesión</h2>

        <div className={styles.content_box1}>
          <h5 className={styles.highlight5}>CORREO ELECTRÓNICO</h5>
          <div className={styles.rect3} />
          <h5 className={styles.highlight6}>CONTRASEÑA</h5>
          <div className={styles.rect4} />
          <h5 className={styles.highlight21}>micorreo@correo.com</h5>
          <h5 className={styles.highlight22}>********</h5>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  className: PropTypes.string
};

export default Login;
