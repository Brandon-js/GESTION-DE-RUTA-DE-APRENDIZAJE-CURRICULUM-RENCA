import mongoose from "mongoose";

const Schema = mongoose.Schema;

const instructorSchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  imagenUrl: { type: String, required: true },
});

export default instructorSchema;
