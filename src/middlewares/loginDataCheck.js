const path = require('path');
const fs = require("fs");
const bcrypt = require('bcrypt');

const usersFilePath = path.join(__dirname, '../database/usersDB.json')
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))

const loginDataCheck = (req, res, next) => {
    let reqUser = req.body.usuario;
    let reqPassword = req.body.password;

    let userCheck = undefined;
    
    for(let u of users) {
        if(reqUser == u.usuario && bcrypt.compareSync(reqPassword, u.password) ) {
            userCheck = true;
            req.session.loggedUser = u
        }
    }

    if(userCheck = true) {
        next();
    }
    else {
        res.redirect('/login', {errors: {
            usuario: {
                msg: 'Las credenciales son inválidas'
            }
        }})
    }
}

module.exports = loginDataCheck;