/*const path = require('path');*/

const controller =
{
    home: (req, res) => {
        /*res.sendFile(path.resolve(__dirname, '..', './views/home.html'));*/
        res.render('home');
    },
    login: (req, res) => {
        /*res.sendFile(path.resolve(__dirname, '..', './views/login.html'));*/
        res.render('users/login');
    },
    register: (req, res) => {
        /*res.sendFile(path.resolve(__dirname, '..', './views/register.html'));*/
        res.render('users/register');
    },
    proximamente: (req, res) => {
        /*res.sendFile(path.resolve(__dirname, '..', './views/proximamente.html'));*/
        res.render('proximamente');
    }
};

module.exports = controller;