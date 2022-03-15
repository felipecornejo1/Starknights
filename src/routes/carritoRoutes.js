// Importar controller y middlewares
const carritoController = require ('./../controllers/carritoController');
const authMiddleware = require('../middlewares/authMiddleware'); // Middleware que verifica que el usuario NO esté logueado

// Importar el método check de express validator
const {check} = require('express-validator');

//Definir las validaciones para el formulario de creación de items
const formValidations = [
    check('name').notEmpty().withMessage('Completa este campo'),
    check('price').notEmpty().withMessage('Completa este campo'),
    check('category').notEmpty().withMessage('Completa este campo')
];

// Importar express y crear la variable que ejecuta el método Router de express
const express = require('express');
const router = express.Router();

// Definir rutas
// Carrito
router.get('/', carritoController.carrito);
// Comprar
router.get('/comprar', carritoController.comprar);
// Comprar
router.get('/comprarAmigo', carritoController.comprarAmigo);
// Marketplace
router.get('/marketplace', carritoController.marketplace);


// Exportar rutas
module.exports = router;