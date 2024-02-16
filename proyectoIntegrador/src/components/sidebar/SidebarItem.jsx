/* eslint-disable react/prop-types */
const SidebarItem = ({
  titulo,
  isOpen,
  onClick,
  secciones,
  icono,
  onSeleccion,
}) => {
  return (
    <div onClick={onClick}>
      <li className="sidebar-item">
        <a
          href="#"
          className="sidebar-link"
          data-bs-toggle="collapse"
          data-bs-target="#auth"
          aria-expanded="false"
          aria-controls="auth"
          aria-label={titulo}
        >
          <i className={icono}></i>
          <span>{titulo}</span>
        </a>
        <ul
          id="auth"
          className="sidebar-dropdown list-unstyled collapse"
          data-bs-parent="#sidebar"
        >
          {isOpen &&
            secciones.map((seccion, index) => (
              <li className="sidebar-item" key={index}>
                <a
                  href="#"
                  className="sidebar-link"
                  onClick={() => onSeleccion({ modulo: titulo, seccion })}
                >
                  {seccion}
                </a>
              </li>
            ))}
        </ul>
      </li>
    </div>
  );
};

export default SidebarItem;
