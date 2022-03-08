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

            if(req.file) {
                db.Users.create({
                    name: req.body.usuario,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10),
                    profile_picture: req.file.filename,
                    created_at: Date.now()

                })
                res.redirect('/users/login');

            }
            else {
                db.Users.create({
                    name: req.body.usuario,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10),
                    profile_picture: 'default.jpg',
                    created_at: Date.now()
                    
                })
                res.redirect('/users/login')
            }
            
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