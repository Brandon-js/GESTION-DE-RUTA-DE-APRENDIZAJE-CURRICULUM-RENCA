import { createBrowserRouter } from 'react-router-dom';
import Home from '../views/Home'
import Catalogo from '../views/Catalogo';
import Registro from '../views/Registro.jsx';
import Cursos from '../views/Cursos.jsx';
import DashBoard from '../views/DashBoard.jsx'
import DashMensaje from '../views/DashMensaje.jsx';
import Navbar from '../components/navbar/Navbar.jsx';
import DashPerfil from '../views/DashPerfil.jsx';
import MisCursos from '../views/MisCursos.jsx';
import CursoAbierto from '../components/CursoAbierto/CursoAbierto.jsx';

const router = createBrowserRouter([
    {path:'/', element: <Home />},
    {path:'/registro', element: <Registro />},
    {path:'/catalogo', element: <Catalogo />},
    {path:'/cursos', element: <Cursos />},
    {path:'/dashboard-user', element: <DashBoard/>},
    {path:'/navdefault', element: <Navbar/>},
    {path:'/dashMensaje', element: <DashMensaje />},
    {path:'/dashboard-mensaje', element: <DashPerfil />},
    {path:'/dash-mis-cursos',element: <MisCursos/> },
    {path:'/curso-abierto', element: <CursoAbierto />}
]);

export default router