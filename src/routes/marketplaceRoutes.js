const marketplaceController = require ('./../controllers/marketplaceController');

const express = require('express');
const router = express.Router();

router.get('/', marketplaceController.marketplace);

router.get('/detalle', marketplaceController.detalle);

router.get('/carrito', marketplaceController.carrito);

module.exports = router;