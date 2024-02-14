import { createBrowserRouter } from 'react-router-dom';
import Home from '../views/Home'
import Register from '../views/Register'
import Catalogo from '../views/Catalogo';

const router = createBrowserRouter([
    {path:'/', element: <Home />},
    {path:'/registro', element: <Register />},
    {path:'/catalogo', element: <Catalogo />},

]);

export default router