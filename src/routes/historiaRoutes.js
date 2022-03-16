// Importar controller y middlewares
const carritoController = require ('./../controllers/historiaController');

// Importar express y crear la variable que ejecuta el método Router de express
const express = require('express');
const router = express.Router();

// Definir rutas
// historia
router.get('/', historiaController.historia);


// Exportar rutas
module.exports = router;