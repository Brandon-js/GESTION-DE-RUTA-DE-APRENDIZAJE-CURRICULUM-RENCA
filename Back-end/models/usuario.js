import mongoose from "mongoose";

const Schema = mongoose.Schema;


const userSchema = new mongoose.Schema({
  
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  googleId: String,
  facebookId: String,

  direccion:{
    type: String,
    required: false
  },

  nombre:{
    type: String,
    required: false
  },

  apellido:{
    type: String,
    required: false
  },

  birthdate:{
    type: Date,
    required: false
  },

  genero:{
    type: String,
    required: false
  },

  educacion:{
    type: String,
    required: false
  }








});

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
