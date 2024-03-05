import mongoose from "mongoose";

const Schema = mongoose.Schema;

const usuarioSchema = new Schema(
  {
    mail: {
      type: String,
      required: true,
      unique: true,
    },
    contrasena: {
      type: String,
      required: true,
    },
    cursos: [
      {
        type: Schema.Types.ObjectId,
        ref: "Curso",
        unique: true,
      },
    ],
  },
  {
    versionKey: false,
  }
);

const Usuario = mongoose.model("Usuario", usuarioSchema);

export default Usuario;
