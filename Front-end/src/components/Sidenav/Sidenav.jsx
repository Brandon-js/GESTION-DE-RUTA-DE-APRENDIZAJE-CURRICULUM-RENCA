import './Sidenav.css'
import React from 'react';

function Sidenav() {
    return (
        <div className="grid-sidenav">
            <div className="sidenav-header">
                <a href="/">
                    <img src="\Front-end\src\assets\logo-renca.png" height="64px" width="160px" alt="Logo-Renca" className="sidenav-logo" />
                </a>
            </div>
            <div className="sidenav-body">
                <ul className="list-unstyled">
                    <li>
                        <button className="cstm-btn">
                            <a href="#" className="link">Mi panel</a>
                        </button>
                    </li>
                    <li>
                        <button className="cstm-btn">
                            <a href="#" className="link">Editar cursos</a>
                        </button>
                    </li>
                    <li>
                        <button className="cstm-btn">
                            <a href="#" className="link">Subir cursos</a>
                        </button>
                    </li>
                    <li>
                        <button className="cstm-btn">
                            <a href="#" className="link">Estudiantes</a>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="sidenav-footer">
                <button className="cstm-btn">
                    <a href="#" className="link">Cerrar sesión</a>
                </button>
            </div>
        </div>
    );
}

export default Sidenav;