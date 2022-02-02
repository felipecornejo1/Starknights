const {body, check, validationResult} = require('express-validator');

const loginValidator = (req, res, next) => {
    let errors = validationResult(req);

    if(errors.isEmpty()) {
            next();
    }
    else {
        res.render('users/login', {errors: errors.mapped(), old: req.body});
    }
}

module.exports = loginValidator;