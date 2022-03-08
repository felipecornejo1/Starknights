const marketplaceController = require ('./../controllers/marketplaceController');

const authMiddleware = require('../middlewares/authMiddleware');

const {check} = require('express-validator');

const formValidations = [
    check('name').notEmpty().withMessage('Completa este campo'),
    check('price').notEmpty().withMessage('Completa este campo'),
    check('category').notEmpty().withMessage('Completa este campo')
];

const express = require('express');
const router = express.Router();

router.get('/', marketplaceController.marketplace);

router.get('/detail/:id', marketplaceController.detail);

router.get('/carrito', marketplaceController.carrito);

router.get('/nuevo-item', authMiddleware, marketplaceController.create);

router.post('/subir-item', authMiddleware, formValidations, marketplaceController.store);

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', authMiddleware, marketplaceController.destroy);

module.exports = router;