import { createBrowserRouter } from 'react-router-dom';
import Home from '../views/Home'
import Catalogo from '../views/Catalogo';
import Registro from '../views/Registro.jsx';
import Cursos from '../views/Cursos.jsx';
import DashBoard from '../views/DashBoard.jsx'
import DashMensaje from '../views/DashMensaje.jsx';
import Login from '../components/login/Login.jsx'
import Navbar from '../components/navbar/Navbar.jsx';
import DashPerfil from '../views/DashPerfil.jsx';
import MisCursos from '../views/MisCursos.jsx';

const router = createBrowserRouter([
    {path:'/', element: <Home />},
    {path:'/registro', element: <Registro />},
    {path:'/catalogo', element: <Catalogo />},
    {path:'/cursos', element: <Cursos />},
    {path:'/dashboard-user', element: <DashBoard/>},
    {path:'/login', element: <Login/>},
    {path:'/navdefault', element: <Navbar/>},
    {path:'/dashMensaje', element: <DashMensaje />},
    {path:'/dashboard-mensaje', element: <DashPerfil />},
    {path:'/dash-mis-cursos',element: <MisCursos/> }
]);

export default router