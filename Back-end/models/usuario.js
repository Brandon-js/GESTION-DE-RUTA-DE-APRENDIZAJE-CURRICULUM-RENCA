import mongoose from 'mongoose';


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

const User = mongoose.model('User', userSchema);

export default User
