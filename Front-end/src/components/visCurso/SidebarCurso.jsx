/* eslint-disable react/prop-types */
import { useState } from "react";
import ModuloSidebar from "./ModuloSidebar.jsx";
import { Link } from 'react-router-dom';
import Logo_Renca from '../../assets/logo-renca.png'
import Boton_2 from "../botones/boton_2.jsx";

const SidebarCurso = (props) => {

    const [moduloAbierto, setModuloAbierto] = useState(null);
    const toggleModulo = (index) => {
        if (moduloAbierto === index) {
            setModuloAbierto(null);
        } else {
            setModuloAbierto(index);
        }
    }

    return (
        <div className="sidenav">
            <a href="/">
                <img src={Logo_Renca} height="64px" width="160px" alt="Logo-Renca" className="sidenav-logo" />
            </a>
            <ul className="list-unstyled">
                {props.infoCurso.modulos && props.infoCurso.modulos.map((modulo, index) => (
                    <ModuloSidebar
                        key={index}
                        modulo={modulo}
                        isOpen={moduloAbierto === index}
                        onClick={() => toggleModulo(index)}
                    />
                ))}
                <li className="sidebar-footer">
                <Boton_2 text='Cerrar sesión'/>
                </li>
            </ul>
        </div>)
};

export default SidebarCurso;