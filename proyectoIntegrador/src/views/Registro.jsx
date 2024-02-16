import React from 'react'
import './Registro.css'

function Registro() {
  return (
   <>
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
            <div className="position-absolute">
            </div>
           </div>
           <div className="col-xl-7 col-lg-12 d-flex">
                <div className="container align-self-center p-6">
                    <h1 className="font-weight-bold mb-3 text-center display-5">Crea tu cuenta gratis</h1>
                    <h3 className="font-weight-bold text-center h4">¡Comienza a aprender ya!</h3>
                    <div className="form-group d-flex flex-column justify-content-center align-items-center">
                        <button className="btn btn-outline-light btn-google btn-sm btn-block mb-2"><i className="icon ion-logo-google lead align-middle mr-2"></i> Continuar con Google</button>
                        <button className="btn btn-outline-light btn-facebook btn-sm btn-block mb-2"><i className="icon ion-logo-facebook lead align-middle mr-2"></i> Continuar con Facebook</button>
                        <button className="btn btn-outline-light btn-apple btn-sm btn-block mb-2"><i className="icon ion-logo-apple lead align-middle mr-2"></i> Continuar con Apple</button>
                    </div>
                    
                    
                    
                    <div className="form-group mb-5">
                        <div className="horizontal-line-container">
                            <hr className="separator"/>
                            <div className="circle"></div>
                            <hr className="separator"/>
                        </div>
                    </div>
                    

                    <form>
                        <div className="form-row mb-2">
                            <div className="form-group col-md-6" id='nombre'>
                                <label className="font-weight-bold">Nombre <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" placeholder="Tu nombre"/>
                            </div>
                            <div className="form-group col-md-6" id='apellido'>
                                <label className="font-weight-bold">Apellido <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" placeholder="Tu apellido"/>
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <label className="font-weight-bold">Correo electrónico <span className="text-danger">*</span></label>
                            <input type="email" className="form-control" placeholder="Ingresa tu correo electrónico"/>
                        </div>
                        <div className="form-group mb-3">
                            <label className="font-weight-bold">Contraseña <span className="text-danger">*</span></label>
                            <input type="password" className="form-control" placeholder="Ingresa una contraseña"/>
                        </div>
                        <div className="form-group d-flex justify-content-center mt-5">
                            <button className="btn btn-primary btn-registrarse">REGISTRARME</button>
                        </div>
                        <div className="custom-checkbox mb-5 d-flex align-items-center">
                            <input className="custom-checkbox-input" type="checkbox" id="privacyCheckbox"/>
                            <label className="custom-checkbox-label mb-5 mt-5" for="privacyCheckbox">Al seleccionar esta casilla aceptas nuestro aviso de privacidad y los términos y condiciones</label>
                        </div>
                        
                        
                    </form>
                    <small className="d-inline-block text-muted mt-5">Todos los derechos reservados | © 2024 Grupo GO</small>
                </div>
           </div>
       </div>
   </section>

   </>
  )
}

export default Registro;