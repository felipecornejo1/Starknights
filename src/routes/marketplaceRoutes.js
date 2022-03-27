// Importar controller y middlewares
const marketplaceController = require ('./../controllers/marketplaceController');
const authMiddleware = require('../middlewares/authMiddleware'); // Middleware que verifica que el usuario NO esté logueado
const buyCheck = require('../middlewares/buyCheck'); // Middleware que verifica que el usuario no sea dueño del item y tenga balance suficiente para comprarlo
const editCheck = require('../middlewares/editCheck');

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
// Marketplace
router.get('/', marketplaceController.marketplace);
// Detalle de item
router.get('/detail/:id', marketplaceController.detail);
// Carrito
router.get('/carrito', marketplaceController.carrito);
// Formulario para crear nuevo item
router.get('/nuevo-item', authMiddleware, marketplaceController.create);
// Enviar y procesar datos del formulario para crear nuevo item
router.post('/subir-item', authMiddleware, formValidations, marketplaceController.store);
// Comprar item
router.put('/buy/:id', buyCheck, marketplaceController.buy);
// Editar Item
router.put('/edit/:id', editCheck, marketplaceController.edit)
// Añadir item al carrito

// Eliminar item
router.delete('/delete/:id', authMiddleware, marketplaceController.destroy);

// Exportar rutas
module.exports = router;