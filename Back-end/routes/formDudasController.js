import express from "express";
import * as formDudasController from "../controllers/formDudasController.js";

const router = express.Router();

router.post("/form-dudas", formDudasController.guardarDuda);

export { router as formDudasRouter };
