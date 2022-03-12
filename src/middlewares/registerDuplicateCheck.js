const bd = require('../../database/models');

const registerDuplicateCheck = (req, res, next) => {
    bd.Users.findAll({where: {email: req.body.email}})
        .then(result => {
            if (result.length>0){
                console.log(result)
                res.render('users/register', {errors: {email: {msg: 'Este email ya se encuentra registrado'}}, old: req.body});
            }
            else {
                bd.Users.findAll({where: {name: req.body.usuario}})
                    .then(result => {
                        if (result.length>0){
                            console.log(2)
                            res.render('users/register', {errors: {usuario: {msg: 'Este nombre de usuario ya se encuentra registrado'}}, old: req.body});
                        }
                        else {
                            next()
                        }
                    })
            }
        })
}

module.exports = registerDuplicateCheck;