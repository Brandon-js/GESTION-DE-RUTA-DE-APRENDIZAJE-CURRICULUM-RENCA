import { createBrowserRouter } from 'react-router-dom';
import Home from '../views/Home'
import Catalogo from '../views/Catalogo';
import Registro from '../views/Registro.jsx';
import Cursos from '../views/Cursos.jsx';

const router = createBrowserRouter([
    {path:'/', element: <Home />},
    {path:'/registro', element: <Registro />},
    {path:'/catalogo', element: <Catalogo />},
    {path:'/cursos', element: <Cursos />},
    
]);

export default router