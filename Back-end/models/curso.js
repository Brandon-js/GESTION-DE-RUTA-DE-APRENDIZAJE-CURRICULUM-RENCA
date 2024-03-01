import mongoose from "mongoose";
import moduloSchema from "./modulo.js";
import instructorSchema from "./instructor.js";

const Schema = mongoose.Schema;

const cursoSchema = new Schema(
  {
    titulo: { type: String, required: true },
    subtitulo: { type: String, required: true },
    categoria: { type: String, required: true },
    descripcion: { type: String, required: true },
    imagenUrl: { type: String, required: true },
    instructor: instructorSchema,
    modulos: [moduloSchema],
  },
  {
    versionKey: false,
  }
);

const Curso = mongoose.model("Curso", cursoSchema);

export default Curso;
