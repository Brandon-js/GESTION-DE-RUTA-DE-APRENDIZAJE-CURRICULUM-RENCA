const fetch = require('node-fetch');
const User = require('../models/usuario');

app.post('/auth/facebook', async (req, res) => {
  const { accessToken, userID } = req.body;
  const urlGraphFacebook = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`;

  try {
    const response = await fetch(urlGraphFacebook);
    const json = await response.json();

    if (json.error) {
      return res.status(500).json({ message: 'Error al autenticar con Facebook' });
    }

    let user = await User.findOne({ facebookId: json.id });

    if (!user) {
      user = new User({
        name: json.name,
        email: json.email,
        facebookId: json.id,
        // Agrega cualquier otro campo relevante
      });
      await user.save();
    }

    // Genera un token de sesión o JWT aquí para el usuario
    // Envía el token de sesión/JWT al cliente

    res.status(200).json({ message: 'Autenticación exitosa', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al autenticar con Facebook' });
  }
});
