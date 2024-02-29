const { OAuth2Client } = require('google-auth-library');
const User = require('../models/usuario'); // Asegúrate de tener la ruta correcta a tu modelo de usuario
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

app.post('/auth/google', async (req, res) => {
  try {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    let user = await User.findOne({ googleId: payload['sub'] });

    if (!user) {
      user = new User({
        name: payload['name'],
        email: payload['email'],
        googleId: payload['sub'],
        // Agrega cualquier otro campo relevante
      });
      await user.save();
    }

    // Genera un token de sesión o JWT aquí para el usuario
    // Envía el token de sesión/JWT al cliente

    res.status(200).json({ message: 'Autenticación exitosa', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al autenticar con Google' });
  }
});
