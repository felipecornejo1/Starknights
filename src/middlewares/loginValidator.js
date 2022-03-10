// Importar el método validationResult de express validator
const {validationResult} = require('express-validator');

const loginValidator = (req, res, next) => {
    // Guardar los errores de la validación en la variable errors
    let errors = validationResult(req);

    // En caso de no haber errores
    if(errors.isEmpty()) {
            // Seguir adelante normalmente
            next();
    }
    // En caso de haber errores
    else {
        // Renderizar la vista del login y pasar las variables errors (con el mensaje de error) y old (con los datos que llegaron por body)
        res.render('users/login', {errors: errors.mapped(), old: req.body});
    }
}

module.exports = loginValidator;