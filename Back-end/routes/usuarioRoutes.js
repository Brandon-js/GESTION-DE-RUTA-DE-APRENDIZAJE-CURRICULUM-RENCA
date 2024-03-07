import express from "express";
import * as usuarioController from "../controllers/usuarioController.js";
import verificarToken from "../middlewares/jwt.js";

const router = express.Router();

router.get("/usuarios", usuarioController.getUsuarios);
router.patch("/usuario/:id", usuarioController.updateUsuario);
router.post("/usuario", usuarioController.createUsuario);
router.post("/login", usuarioController.loginUsuario);
router.get("/usuario", verificarToken, usuarioController.getUsuario);
router.post(
  "/inscribir-curso",
  usuarioController.inscribirCurso
);

export { router as usuarioRouter };
