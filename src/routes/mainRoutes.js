const mainController = require ('./../controllers/mainController');

const express = require('express');
const router = express.Router();

const {body, validationResult, check} = require('express-validator');

router.get('/', mainController.home);

router.get('/proximamente', mainController.proximamente);

module.exports = router;