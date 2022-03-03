const {validationResult} = require('express-validator')
const bcrypt = require('bcryptjs');

const db = require('../../database/models');

const controller = {
    login: (req, res) => {
        res.render('users/login');
    },
    sendLogin: (req, res) => {
        res.redirect('/');
    },
    register: (req, res) => {
        res.render('users/register');
    },
    sendRegister: (req, res) => {
        console.log(1)
        let errors = validationResult(req);

        if(errors.isEmpty()) {
            console.log(2)

            if(req.file) {
                console.log(3)
                db.Users.create({
                    name: req.body.usuario,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10),
                    picture: req.file.filename
                })
                res.redirect('/users/login')
                console.log(4)

            }
            else {
                console.log(5)
                db.Users.create({
                    name: req.body.usuario,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10),
                    picture: 'default.jpg'
                    
                })
                console.log(6)
                res.redirect('/users/login')
                console.log(7)
            }
            console.log(8)
            
        }
        else {
            console.log(9)
            res.render('users/register', {errors: errors.mapped, old: req.body});
        }
        console.log(10)
    },
    profile: (req, res) => {
        res.render('users/profile');
    },
    logout: (req, res) => {
        req.session.destroy();
        res.clearCookie('email');
        res.redirect('/')
    }
}

module.exports = controller;