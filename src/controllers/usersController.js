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
        let errors = validationResult(req);

        if(errors.isEmpty()) {

            console.log(req.file)

            if(req.file) {
                db.Users.create({
                    name: req.body.usuario,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10),
                    picture: req.file.filename
                })
            }
            else {
                db.Users.create({
                    name: req.body.usuario,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10),
                    picture: 'default.jpg'
                })
            }
            res.redirect('/users/login');
            
        }
        else {
            res.render('users/register', {errors: errors.mapped, old: req.body});
        }
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