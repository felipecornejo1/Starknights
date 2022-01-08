const path = require('path');

const controller =
{
    home: (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', './views/home.html'));
    },
    marketplace: (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', './views/marketplace.html'));
    },
    login: (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', './views/login.html'));
    },
    register: (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', './views/register.html'));
    },
    proximamente: (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', './views/proximamente.html'));
    }
}

module.exports = controller;