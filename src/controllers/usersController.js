const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator')
const bcrypt = require('bcryptjs');
const session = require('express-session');

const db = require('../../database/models');

const usersFilePath = path.join(__dirname, '../database/usersDB.json')
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))

const user = require('../models/User');
const { clearCookie } = require('express/lib/response');
const { brotliDecompress } = require('zlib');

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

            if(req.file.filename) {
                console.log('archivo')
                db.Users.create({
                    name: req.body.usuario,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10),
                    picture: req.file.filename
                })
            }
            else {
                console.log('no archivo')
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