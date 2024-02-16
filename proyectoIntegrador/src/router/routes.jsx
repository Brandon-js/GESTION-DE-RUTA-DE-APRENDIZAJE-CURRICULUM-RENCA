import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Catalogo from "../views/Catalogo";
import Registro from "../views/Registro.jsx";
import Cursos from "../views/Cursos.jsx";
import Curso from "../views/Curso.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/registro", element: <Registro /> },
  { path: "/catalogo", element: <Catalogo /> },
  { path: "/cursos", element: <Cursos /> },
  { path: "/curso", element: <Curso /> },
]);

export default router;
