const {body, check, validationResult} = require('express-validator');

const loginValidator = (req, res, next) => {
    let errors = validationResult(req);

    if(errors.isEmpty()) {
        console.log('loginvalidator pasado')
            next();
    }
    else {
        console.log('LoginValidator Fallido')
        res.render('users/login', {errors: errors.mapped(), old: req.body});
    }
}

module.exports = loginValidator;