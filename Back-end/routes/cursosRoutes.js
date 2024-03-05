import express from "express";
import * as cursosController from "../controllers/cursosController.js";
import verificarToken from "../middlewares/jwt.js";

const router = express.Router();

router.get("/cursos", cursosController.getCursos);
router.get("/curso/:id", cursosController.getCursoById);
router.post("/curso", cursosController.createCurso);
router.patch("/curso/:id", cursosController.updateCurso);
router.delete("/curso/:id", cursosController.deleteCurso);
router.post("/cursos-ids", cursosController.getCursosByIds);

export { router as cursosRouter };
