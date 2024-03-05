/* eslint-disable react/prop-types */
import { useState } from "react"
import LeccionModulo from "./LeccionModulo"

const ModuloSidebar = ({ modulo, isOpen, onClick }) => {
    const [leccionSeleccionada, setLeccionSeleccionada] = useState(null);
    return (<div>
        <li className="mb-1">
            <button className="custom-btn collapsed"
                onClick={onClick}
                aria-expanded={isOpen ? "true" : "false"}>
                {modulo.titulo}
            </button>
            <div className={isOpen ? "collapse show" : "collapse"}>
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    {modulo.lecciones.map((leccion, index) => (
                        <LeccionModulo
                            key={index}
                            leccion={leccion}
                            isSelected={leccionSeleccionada === index}
                            onClick={() => setLeccionSeleccionada(index)}
                        />
                    ))}
                </ul>
            </div>
        </li>
    </div>)
}

export default ModuloSidebar