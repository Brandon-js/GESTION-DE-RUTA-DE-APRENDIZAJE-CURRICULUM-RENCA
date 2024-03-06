import './VisCurso.css'
import { useLocation } from 'react-router-dom';
import SidebarCurso from './SidebarCurso.jsx'
import ContenidoCurso from './contenidoCurso.jsx'

const VisCurso = () => {
    const location = useLocation();
    const { infoCurso } = location.state || {};
    return (
        <div>
            <SidebarCurso infoCurso={infoCurso} />
            <ContenidoCurso />
        </div>
    );
}

export default VisCurso