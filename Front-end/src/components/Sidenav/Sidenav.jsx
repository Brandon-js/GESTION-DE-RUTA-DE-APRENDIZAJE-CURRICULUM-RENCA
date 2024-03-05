import './Sidenav.css'
import React from 'react';
import { Link } from 'react-router-dom';

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
                            <Link to={'/admin-panel'} className="link">Mi panel</Link>
                        </button>
                    </li>
                    <li>
                        <button className="cstm-btn">
                        <Link to={'/edit-section'} className="link">Editar cursos</Link>
                        </button>
                    </li>
                    <li>
                        <button className="cstm-btn">
                        <Link to={'/upload-course'} className="link">Subir cursos</Link>
                        </button>
                    </li>
                    <li>
                        <button className="cstm-btn">
                        <Link to={'/students-section'} className="link">Estudiantes</Link>
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