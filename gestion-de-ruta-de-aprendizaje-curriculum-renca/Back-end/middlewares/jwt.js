import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

const verificarToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No se proporcionó un token" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.body.usuario = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token inválido o expirado" });
  }
};

export default verificarToken;
