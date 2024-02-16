import { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import ContenidoCurso from "../components/curso/ContenidoCurso";
import "./Curso.css";

const Curso = () => {
  const [contenidoSeleccionado, setContenidoSeleccionado] = useState({
    modulo: null,
    seccion: null,
  });

  const handleSeleccion = (contenido) => {
    setContenidoSeleccionado(contenido);
  };

  return (
    <div className="curso-container">
      <div className="sidebar-container">
        <Sidebar onSeleccion={handleSeleccion} />
      </div>
      <div className="contenido-curso-container">
        {contenidoSeleccionado.seccion && (
          <ContenidoCurso contenido={contenidoSeleccionado} />
        )}
      </div>
    </div>
  );
};
export default Curso;
