const userController = require('../controllers/userController');

const express = require('express');
const router = express.Router();

router.get('/users', userController.index);
router.get('/users/:id', userController.find);

module.exports = router