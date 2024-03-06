/* eslint-disable react/prop-types */
import { useState } from "react";
import ModuloSidebar from "./ModuloSidebar.jsx";

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
                <img src="/logo-renca.png" alt="Logo-Renca" className="sidenav-logo" />
            </a>
            <ul className="list-unlysted">
                {props.infoCurso.modulos && props.infoCurso.modulos.map((modulo, index) => (
                    <ModuloSidebar
                        key={index}
                        modulo={modulo}
                        isOpen={moduloAbierto === index}
                        onClick={() => toggleModulo(index)}
                    />
                ))}
                <li className="sidebar-footer">
                    <button className="btn">
                        Cerrar Sesión
                    </button>
                </li>
            </ul>
        </div>)
};

export default SidebarCurso;