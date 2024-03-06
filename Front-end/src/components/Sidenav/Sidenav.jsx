import './Sidenav.css'
import React from 'react';
import { Link } from 'react-router-dom';
import Logo_Renca from '../../assets/logo-renca.png'

function Sidenav() {
    return (
        <div className="grid-sidenav">
            <div className="sidenav-header">
                <a href="/">
                    <img src={Logo_Renca} height="64px" width="160px" alt="Logo-Renca" className="sidenav-logo" />
                </a>
            </div>
            <div className="sidenav-body">
                <ul className="list-unstyled">
                    <li>
                    <Link to={'/admin-panel'} className="link">
                        <button className="cstm-btn">Mi panel
                        </button>
                    </Link>

                    </li>
                    <li>
                    <Link to={'/edit-section'} className="link">
                        <button className="cstm-btn">
                        Editar cursos
                        </button>
                    </Link>
                    </li>
                    <li>
                    <Link to={'/upload-course'} className="link">
                        <button className="cstm-btn">
                        Subir cursos
                        </button>
                    </Link>
                    </li>
                    <li>
                    <Link to={'/students-section'} className="link">
                        <button className="cstm-btn">
                        Estudiantes
                        </button>
                    </Link>
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