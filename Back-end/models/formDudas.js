import mongoose from "mongoose";

const Schema = mongoose.Schema;

const formDudasSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    apellido: {
      type: String,
      required: true,
    },
    correo: {
      type: String,
      required: true,
    },
    mensaje: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const formDudas = mongoose.model("FormDudas", formDudasSchema);

export default formDudas;
