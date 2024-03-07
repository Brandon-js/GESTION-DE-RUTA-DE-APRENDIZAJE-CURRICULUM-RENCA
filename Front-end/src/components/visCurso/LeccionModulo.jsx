/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const LeccionModulo = ({ leccion, isSelected, onClick }) => {
    return (<div>
        <li className="mb-2" onClick={onClick}>
            <a className="link">{leccion.nombre}
            </a>
        </li>
    </div>)
}

export default LeccionModulo