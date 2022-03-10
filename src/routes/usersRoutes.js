// Importar controller y middlewares
const usersController = require('./../controllers/usersController');
const guestMiddleware = require('./../middlewares/guestMiddleware'); // Middleware que verifica que el usuario NO esté logueado
const authMiddleware = require('./../middlewares/authMiddleware'); // Middleware que verifica que el usuario SÍ esté logueado
const loginValidator = require('../middlewares/loginValidator'); // Middleware que verifica que el formulario de login se haya llenado correctamente
const loginDataCheck = require('../middlewares/loginDataCheck'); // Middleware que busca en la base de datos al usuario que intenta loguearse, y lo deja seguir adelante en caso de verificar los datos


// Importar path y express, y crear la variable que ejecuta el método Router de express
const path = require('path');
const express = require('express');
const router = express.Router();

// Importar y configurar multer para subir imágenes de perfil
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

// Importar el método check de express validator
const {check} = require('express-validator');

// Definir validaciones del formulario de registro
const registerValidations = [
    check('usuario').notEmpty().withMessage('Este campo es obligatorio'),
    check('email').isEmail().withMessage('Debes incluir un email válido'),
    check('password').isLength({min: 6}).withMessage('Debe contener 6 caracteres como mínimo')
];

// Definir validaciones del formulario de login
const loginValidations = [
    check('usuario').notEmpty().withMessage('Ingresa tu nombre de usuario'),
    check('password').notEmpty().withMessage('Ingresa tu contraseña')
];

// Definir rutas
// Formulario de registro
router.get('/register', guestMiddleware, usersController.register);
// Enviar y procesar datos del formulario de registro
router.post('/register', uploadFile.single('archivo'), registerValidations, usersController.sendRegister);
// Formulario de login
router.get('/login', guestMiddleware, usersController.login);
// Enviar y procesar datos del formulario de login
router.post('/login', loginValidations, loginValidator, loginDataCheck, usersController.sendLogin);
// Perfil
router.get('/profile', authMiddleware, usersController.profile);
// Cerrar sesión
router.post('/logout', authMiddleware, usersController.logout);

// Exportar
module.exports = router;