const path = require('path');

const controller = 
{
    marketplace: (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', './views/marketplace.html'));
    },
    carrito: (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', './views/carrito.html'));
    },
    detalle: (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', './views/detalle.html'));
    }
}

module.exports = controller;