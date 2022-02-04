const marketplaceController = require ('./../controllers/marketplaceController');

const express = require('express');
const router = express.Router();

router.get('/', marketplaceController.marketplace);

router.get('/detail/:id', marketplaceController.detail);

router.get('/carrito', marketplaceController.carrito);

router.get('/nuevo-item', marketplaceController.create);

router.post('/subir-item', marketplaceController.store);

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', marketplaceController.destroy);

module.exports = router;