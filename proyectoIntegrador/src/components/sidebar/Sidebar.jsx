import "./Sidebar.css";
import { useState } from "react";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarFooter from "./SidebarFooter";

const curso = {
  modulo: [
    {
      titulo: "Tutorial",
      secciones: ["Paso a paso", "Videotutorial"],
      icono: "lni lni-support",
    },
    {
      titulo: "Módulo 1",
      secciones: ["Introducción", "Sección 1", "Control 1"],
      icono: "lni lni-book",
    },
    {
      titulo: "Módulo 2",
      secciones: ["Sección 1", "Sección 2", "Control 2"],
      icono: "lni lni-book",
    },
    {
      titulo: "Módulo 3",
      secciones: ["Sección 1", "Sección 2", "Prueba final"],
      icono: "lni lni-book",
    },
  ],
};
// eslint-disable-next-line react/prop-types
const Sidebar = ({ onSeleccion }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div>
      <aside id="sidebar">
        <SidebarLogo />
        {curso.modulo.map((curso, index) => (
          <SidebarItem
            key={index}
            titulo={curso.titulo}
            isOpen={index === activeIndex}
            onClick={() => handleClick(index, curso)}
            secciones={curso.secciones}
            icono={curso.icono}
            onSeleccion={onSeleccion}
          />
        ))}
        <SidebarFooter />
      </aside>
    </div>
  );
};

export default Sidebar;
