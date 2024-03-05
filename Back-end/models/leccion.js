import mongoose from "mongoose";

const Schema = mongoose.Schema;

const leccionSchema = new Schema(
  {
    nombre: { type: String, required: true },
    recurso: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

export default leccionSchema;
