const jwt = require('jsonwebtoken');
const secretKey = '234rsdgsdter6rgfdge5436y6rujg3q3'; // Deberías almacenar esto de manera segura, por ejemplo, en variables de entorno.

function generarToken(usuario) {
  return jwt.sign({ usuario }, secretKey, { expiresIn: '2h' });
}

function verificarToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ mensaje: 'Acceso denegado. Token no proporcionado.' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.usuario = decoded.usuario;
    next();
  } catch (error) {
    res.status(401).json({ mensaje: 'Token inválido.' });
  }
}

module.exports = { generarToken, verificarToken };
