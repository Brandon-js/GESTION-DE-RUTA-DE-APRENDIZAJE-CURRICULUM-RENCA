import React from 'react'
import SideBar from '../components/side-bar/SideBar'
import iconUser from '../assets/icon-user.png'
import '../components/curso-progreso/DashPerfil.css'

function DashPerfil() {
  return (
    <div>
        <>
    
    <div className='row'>
    <div className='col-2'>
        <SideBar />
    </div>
    <div className='col-10'>
        <h3>Mi Perfil</h3>
        <p>Dashboard - Mi perfil</p>
        <div className='row'>
            <div className='col'>
            <img src={iconUser} ></img>
            </div>
                    <button className='DashPerfilButton'>Subir foto</button>
                    <button className='DashPerfilButton'>Borrar foto</button>
        </div>
        <div >
        <form>
                        <div className="row mb-3">
                            <div className="form-group col-md-4">
                                <label className="font-weight-bold">Nombre: </label>
                                <input type="text" className="form-control" placeholder="Tu nombre"/>
                            </div>
                            <div className="form-group col-md-4" id='apellido'>
                                <label className="font-weight-bold">Apellido: </label>
                                <input type="text" className="form-control" placeholder="Tu apellido"/>
                            </div>
                            <div className="form-group col-md-4" id='fecha'>
                                <label className="font-weight-bold">Fecha de nacimiento: </label>
                                <input type="text" className="form-control" placeholder="DD/MM/AA"/>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="form-group col-md-4">
                                <label className="font-weight-bold">Genero: </label>
                                <input type="text" className="form-control" placeholder="Prefiero no decirlo"/>
                            </div>
                            <div className="form-group col-md-8" id='educacion'>
                                <label className="font-weight-bold">Nivel educacional: </label>
                                <input type="text" className="form-control" placeholder="Educacion media completa"/>
                            </div>                        
                        </div>
                        <div className="form-group mb-3">
                            <label className="font-weight-bold">Direccion:</label>
                            <input type="text" className="form-control" placeholder="Ingresa tu direccion"/>
                        </div>
                        <div className="form-group mb-3">
                            <label className="font-weight-bold">Correo:</label>
                            <input type="email" className="form-control" placeholder="Ingresa un correo"/>
                        </div>
                        <div className="form-group mb-3">
                            <label className="font-weight-bold">Contraseña:</label>
                            <input type="password" className="form-control" placeholder="Ingresa tu contraseña"/>
                        </div>
                        <div className="form-group mb-3">
                            <label className="font-weight-bold">Registro social de hogares:</label>
                            <input type="text" className="form-control" placeholder="archivo PDF/JPG/PNG/word"/>
                        </div>
                        <button className='DashPerfilButton'>Subir archivo</button>
                        <div>
                            <button className='boton-curso'>Guardar</button>
                        </div>                        
                    </form>
        </div>
    </div>
    </div>
    </>
    </div>
  )}

  export default DashPerfil