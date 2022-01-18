const mainController = require ('./../controllers/mainController');

const express = require('express');
const router = express.Router();

router.get('/', mainController.home);

router.get('/login', mainController.login);

router.get('/register', mainController.register);

router.get('/proximamente', mainController.proximamente);

module.exports = router;