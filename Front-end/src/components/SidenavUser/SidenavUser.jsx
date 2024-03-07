import './SidenavUser.css'
import React from 'react';
import logo from '../../assets/White-logo.png'
import { Link } from 'react-router-dom';


function SidenavUser() {
    return (
        <div className="grid-sidenav">
            <div className="sidenav-header">
                <a href="/">
                    <img src={logo} height="64px" width="160px" alt="Logo-Renca" className="sidenav-logo" />
                </a>
            </div>
            <div className="sidenav-body">
                <ul className="list-unstyled">
                    <li>
                    <Link to={'/dashboard-user'} className="link">
                        <button className="cstm-btn">Mi panel
                        </button>
                    </Link>
                    </li>
                    <li>
                    <Link to={'/dashboard-mensaje'} className="link">
                        <button className="cstm-btn">Mi perfil
                        </button>
                    </Link>
                    </li>
                    <li>
                    <Link to={'/dashMensaje'} className="link">
                        <button className="cstm-btn">Mensajes
                        </button>
                    </Link>
                    </li>
                    <li>
                    <Link to={'/dash-mis-cursos'} className="link">
                        <button className="cstm-btn">Mis cursos
                        </button>
                    </Link>
                    </li>
                </ul>
            </div>
            <div className="sidenav-footer">
            <Link to={'/'} className="link">
                        <button className="cstm-btn">Cerrar sesion
                        </button>
                    </Link>
            </div>
        </div>
    );
}

export default SidenavUser;