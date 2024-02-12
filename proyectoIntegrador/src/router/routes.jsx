import { createBrowserRouter } from 'react-router-dom';
import Home from '../views/Home'
import Register from '../views/Register'

const router = createBrowserRouter([
    {path:'/', element: <Home />},
    {path:'/registro', element: <Register />},

]);

export default router