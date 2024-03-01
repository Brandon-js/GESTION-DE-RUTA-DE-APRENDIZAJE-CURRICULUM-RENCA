const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correoElectronico: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
  googleId: { type: String },
  facebookId: { type: String }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
