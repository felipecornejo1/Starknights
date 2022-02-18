const bcrypt = require('bcryptjs');
const bd = require('../../database/models')

const loginDataCheck = (req, res, next) => {
    let reqUser = req.body.usuario;
    let reqPassword = req.body.password;

    bd.Users.findOne({
        where: {
            name: reqUser
        }
    })
        .then(result => {
            if(result != null) {
                if (bcrypt.compareSync(reqPassword, result.password) == true) {
                    req.session.loggedUser = result;
                    res.cookie('email', result.email)
                    next()
                }
                else{
                    res.render('users/login', {errors: {
                        usuario: {
                            msg: 'Las credenciales son inválidas'
                        }
                    },
                        old: req.body
                    }) 
                }
            }
            else {
                res.render('users/login', {errors: {
                    usuario: {
                        msg: 'Las credenciales son inválidas'
                    }
                },
                    old: req.body
                })
            }
        })
}

module.exports = loginDataCheck;