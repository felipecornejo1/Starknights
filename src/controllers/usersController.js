const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator')
const bcrypt = require('bcrypt');
const session = require('express-session');

const usersFilePath = path.join(__dirname, '../database/usersDB.json')
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))

const user = require('../models/user');

const controller = {
    storeUser: (req, res) => {
        const generateID = () => {
            const lastUser = users[users.length - 1];
            if(lastUser != undefined) {
                return lastUser.id + 1;
            }
            return 1;
        }

        // FALTA TERMINAR, SOLO SE GENERÓ EL NUEVO ID
    },
    login: (req, res) => {
        res.render('users/login');
    },
    sendLogin: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()) {
            
            let reqUser = {
                ...req.body
            }
            let userCheck = undefined;

            for(let u of users) {
                if(reqUser.usuario == u.usuario && bcrypt.compareSync(reqUser.password, u.password)) {
                    userCheck = u
                    delete userCheck.password
                }
            }

            if(userCheck) {
                req.session.loggedUser = userCheck

                res.redirect('/');
            }
            /* else {
                res.redirect('users/login', {errors: {
                    usuario: {
                        msg: 'Las credenciales son inválidas'
                    }
                }})
            } */

        }
        else {
            res.render('users/login', {errors: errors.mapped(), old: req.body});
        }
    },
    register: (req, res) => {
        res.render('users/register');
    },
    sendRegister: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()) {

            let userInDB = undefined;

            for(let u of users) {
                if(u.email == req.body.email) {
                    userInDB = req.body.email
                }
            }

            if (userInDB) {
                res.render('users/register', {
                    errors: {
                        email: {
                            msg: 'Este email ya se encuentra registrado'
                        }},
                    old: req.body })
            }
            else {
                    var newUser = {
                        ...req.body,
                        password: bcrypt.hashSync(req.body.password, 10),
                        id: user.generateId()
                    }
    
                users.push(newUser);
                fs.writeFileSync(usersFilePath, JSON.stringify(users,null,' '));
                res.redirect('/users/login');
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
        res.redirect('/')
    }
}

module.exports = controller;