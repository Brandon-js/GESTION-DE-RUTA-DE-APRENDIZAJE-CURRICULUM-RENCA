import Usuario from "../models/usuario.js";
import Curso from "../models/curso.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const saltRounds = 10;
const JWT_SECRET = process.env.JWT_SECRET;

const createUsuario = async (req, res) => {
  try {
    const { mail, contrasena } = req.body;
    const hashedPassword = await bcrypt.hash(contrasena, saltRounds);
    const nuevoUsuario = new Usuario({ mail, contrasena: hashedPassword });
    const usuarioGuardado = await nuevoUsuario.save();
    res.status(201).json(usuarioGuardado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const loginUsuario = async (req, res) => {
  const { mail, contrasena } = req.body;
  try {
    const usuario = await Usuario.findOne({ mail });
    if (!usuario) {
      return res
        .status(404)
        .json({ message: "Usuario o contraseña incorrectos" });
    }

    const contrasenaValida = await bcrypt.compare(
      contrasena,
      usuario.contrasena
    );
    if (!contrasenaValida) {
      return res
        .status(404)
        .json({ message: "Usuario o contraseña incorrectos" });
    }

    const token = jwt.sign({ mail, expiresIn: "1h" }, JWT_SECRET);

    const cursos = usuario.cursos.map((curso) => curso._id);
    res.status(200).json({ token, mail, cursos });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getUsuario = async (req, res) => {
  const mail = req.body.mail;
  try {
    const usuario = await Usuario.findOne({ mail });
    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.status(200).json(usuario.cursos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const inscribirCurso = async (req, res) => {
  const { mail, curso } = req.body;
  try {
    const usuario = await Usuario.findOne({ mail });
    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const cursoExiste = await Curso.findOne({ _id: curso });
    if (!cursoExiste) {
      return res.status(404).json({ message: "Curso no encontrado" });
    }

    usuario.cursos.push(curso);
    await usuario.save();
    res.status(200).json(usuario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Función que obtiene todos los usuarios dentro de la BD.
const getUsuarios = async (req, res) => {
  try {
    const Users = await Usuario.find();
    res.status(200).json(Users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Función que actualiza un usuario
const updateUsuario = async (req, res) => {
  try {
    const user = await Usuario.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (user) {
      res.status(200).json({ message: "Usuario Actualizado" });
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createUsuario, loginUsuario, getUsuario, inscribirCurso, getUsuarios, updateUsuario };
