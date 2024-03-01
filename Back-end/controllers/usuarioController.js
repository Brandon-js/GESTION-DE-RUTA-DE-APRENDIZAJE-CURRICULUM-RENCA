const express = require('express');
const User = require('../models/usuario');

const app = express();

app.post('/registro', async (req, res) => {
  try {
    const { nombre, correoElectronico, contraseña } = req.body;
    const usuarioExistente = await User.findOne({ correoElectronico });

    if (usuarioExistente) {
      return res.status(400).json({ mensaje: 'El correo electrónico ya está registrado' });
    }

    const nuevoUsuario = new User({ nombre, correoElectronico, contraseña });
    await nuevoUsuario.save();

    res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
