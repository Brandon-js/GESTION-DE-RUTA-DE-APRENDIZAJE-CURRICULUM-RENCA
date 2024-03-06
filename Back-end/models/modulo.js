import mongoose from "mongoose";
import leccionSchema from "./leccion.js";

const Schema = mongoose.Schema;

const moduloSchema = new Schema(
  {
    titulo: { type: String, required: true },
    lecciones: [leccionSchema],
  },
  {
    versionKey: false,
  }
);

export default moduloSchema;
