import formDudas from "../models/formDudas.js";

const guardarDuda = async (req, res) => {
  const { nombre, apellido, correo, mensaje } = req.body;
  try {
    const duda = new formDudas({
      nombre,
      apellido,
      correo,
      mensaje,
    });
    await duda.save();
    res.status(201).json("Duda guardada");
  } catch (error) {
    res.status(400).json("Error al guardar la duda");
  }
};

export { guardarDuda };
