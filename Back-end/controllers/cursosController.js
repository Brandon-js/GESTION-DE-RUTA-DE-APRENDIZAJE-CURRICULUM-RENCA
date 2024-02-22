import Cursos from "../models/curso.js";

//Función que obtiene todos los cursos dentro de la BD.
const getCursos = async (req, res) => {
  try {
    const cursos = await Cursos.find();
    res.status(200).json(cursos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Función que obtiene un curso, especificado por su id, indicado en la URL de la request.
const getCursoById = async (req, res) => {
  try {
    const curso = await Cursos.findById(req.params.id);
    if (curso) {
      res.status(200).json(curso);
    } else {
      res.status(404).json({ message: "Curso no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Función que crea un nuevo curso, con los datos enviados en el cuerpo de la request.
const createCurso = async (req, res) => {
  try {
    const nuevoCurso = new Cursos(req.body);
    const cursoGuardado = await nuevoCurso.save();
    res.status(201).json(cursoGuardado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Función que actualiza un curso, especificado por su id (indicado en la URL de la request), con los datos enviados en el cuerpo de la request.
const updateCurso = async (req, res) => {
  try {
    const curso = await Cursos.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (curso) {
      res.status(200).json({ message: "Curso actualizado" });
    } else {
      res.status(404).json({ message: "Curso no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Función que elimina un curso, especificado por su id, indicado en la URL de la request.
const deleteCurso = async (req, res) => {
  try {
    const curso = await Cursos.findByIdAndDelete(req.params.id);
    if (curso) {
      res.status(200).json({ message: "Curso eliminado" });
    } else {
      res.status(404).json({ message: "Curso no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getCursos, getCursoById, createCurso, updateCurso, deleteCurso };
