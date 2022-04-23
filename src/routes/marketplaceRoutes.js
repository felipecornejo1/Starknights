// Importar controller y middlewares
const marketplaceController = require ('./../controllers/marketplaceController');
const authMiddleware = require('../middlewares/authMiddleware'); // Middleware que verifica que el usuario NO esté logueado
const founderAuth = require('../middlewares/founderAuth'); // Middleware que verifica que el usuario sea tipo founder
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
router.get('/detail/:id', authMiddleware, marketplaceController.detail);
// Carrito
router.get('/carrito', marketplaceController.carrito);
// Formulario para crear nuevo item
router.get('/nuevo-item', authMiddleware, founderAuth, marketplaceController.create);
// Enviar y procesar datos del formulario para crear nuevo item
router.post('/subir-item', authMiddleware, formValidations, marketplaceController.store);
// Comprar item
router.put('/buy/:id', buyCheck, marketplaceController.buy);
// Vender item
router.put('/sell/:id', marketplaceController.sell);
//Cancelar venta
router.put('/cancel-sale/:id', marketplaceController.cancelSale);
// Editar Item
router.put('/edit/:id', editCheck, marketplaceController.edit);
// Eliminar item
router.delete('/delete/:id', authMiddleware, marketplaceController.destroy);

// Exportar rutas
module.exports = router;