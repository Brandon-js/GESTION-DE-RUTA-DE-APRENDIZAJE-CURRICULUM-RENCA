import './SidenavUser.css'
import React from 'react';
import logo from '../../assets/logo-renca.png'

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
                        <button className="cstm-btn">
                            <a href="/dashboard-user" className="link">Mi panel</a>
                        </button>
                    </li>
                    <li>
                        <button className="cstm-btn">
                            <a href="/dashboard-mensaje" className="link">Mi perfil</a>
                        </button>
                    </li>
                    <li>
                        <button className="cstm-btn">
                            <a href="/dashMensaje" className="link">Mensajes</a>
                        </button>
                    </li>
                    <li>
                        <button className="cstm-btn">
                            <a href="/dash-mis-cursos" className="link">Mis cursos</a>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="sidenav-footer">
                <button className="cstm-btn">
                    <a href="/" className="link">Cerrar sesión</a>
                </button>
            </div>
        </div>
    );
}

export default SidenavUser;