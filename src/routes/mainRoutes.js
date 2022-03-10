// Importar el controller
const mainController = require ('./../controllers/mainController');

// Importar express y crear la variable que ejecuta el método Router de express
const express = require('express');
const router = express.Router();

// Definir las rutas
// Home
router.get('/', mainController.home);
// Proximamente
router.get('/proximamente', mainController.proximamente);
// Planetas
router.get('/planetas', mainController.planetas);

// Exportar rutas
module.exports = router;