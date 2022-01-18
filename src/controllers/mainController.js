/*const path = require('path');*/

const controller =
{
    home: (req, res) => {
        /*res.sendFile(path.resolve(__dirname, '..', './views/home.html'));*/
        res.render('home');
    },
    marketplace: (req, res) => {
        /*res.sendFile(path.resolve(__dirname, '..', './views/marketplace.html'));*/
        res.render('marketplace')
    },
    login: (req, res) => {
        /*res.sendFile(path.resolve(__dirname, '..', './views/login.html'));*/
        res.render('login');
    },
    register: (req, res) => {
        /*res.sendFile(path.resolve(__dirname, '..', './views/register.html'));*/
        res.render('register');
    },
    proximamente: (req, res) => {
        /*res.sendFile(path.resolve(__dirname, '..', './views/proximamente.html'));*/
        res.render('proximamente');
    }
};

module.exports = controller;