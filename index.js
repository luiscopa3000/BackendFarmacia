// app.js

const express = require('express');
const routes = require('./src/routers/useroutes'); // Importa las rutas desde el archivo routes.js
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Usa las rutas definidas en routes.js
app.use(bodyParser.json());
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Servidor API escuchando en el puerto ${PORT}`);
});
