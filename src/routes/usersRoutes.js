const usersController = require('./../controllers/usersController');

const guestMiddleware = require('./../middlewares/guestMiddleware');
const authMiddleware = require('./../middlewares/authMiddleware');
const loginValidator = require('../middlewares/loginValidator');
const loginDataCheck = require('../middlewares/loginDataCheck');

const path = require('path');
const express = require('express');
const router = express.Router();

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/img/profile');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});
const uploadFile = multer({ storage: storage });

const {check} = require('express-validator');

const registerValidations = [
    check('usuario').notEmpty().withMessage('Este campo es obligatorio'),
    check('email').isEmail().withMessage('Debes incluir un email válido'),
    check('password').isLength({min: 6}).withMessage('Debe contener 6 caracteres como mínimo')
];

const loginValidations = [
    check('usuario').notEmpty().withMessage('Ingresa tu nombre de usuario'),
    check('password').notEmpty().withMessage('Ingresa tu contraseña')
];

router.get('/login', guestMiddleware, usersController.login);

router.post('/login', loginValidations, loginValidator, loginDataCheck, usersController.sendLogin);

router.get('/register', guestMiddleware, usersController.register);

router.post('/register', uploadFile.single('archivo'), registerValidations, usersController.sendRegister);

router.get('/profile', authMiddleware, usersController.profile);

router.post('/logout', authMiddleware, usersController.logout);

module.exports = router;