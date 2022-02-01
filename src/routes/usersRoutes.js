const usersController = require('./../controllers/usersController');
const isUserLogged = require('../middlewares/isUserLogged');

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const {body, validationResult, check} = require('express-validator');

const registerValidations = [
    check('usuario').notEmpty().withMessage('Este campo es obligatorio'),
    check('email').isEmail().withMessage('Debes incluir un email válido'),
    check('password').isLength({min: 6}).withMessage('Debe contener 6 caracteres como mínimo')
];

const loginValidations = [
    check('usuario').notEmpty().withMessage('Ingresa tu nombre de usuario'),
    check('password').notEmpty().withMessage('Ingresa tu contraseña')
];



module.exports = router;