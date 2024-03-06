/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const LeccionModulo = ({ leccion, isSelected, onClick }) => {
    return (<div>
        <li onClick={onClick}>
            <a className="link">{leccion.nombre}
            </a>
        </li>
    </div>)
}

export default LeccionModulo