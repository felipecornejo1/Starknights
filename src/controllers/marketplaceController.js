/*const path = require('path');*/

const controller = 
{
    marketplace: (req, res) => {
        /*res.sendFile(path.resolve(__dirname, '..', './views/marketplace.html'));*/
        res.render('marcketplace');
    },
    carrito: (req, res) => {
        /*res.sendFile(path.resolve(__dirname, '..', './views/carrito.html'));*/
        res.render('carrito');
    },
    detalle: (req, res) => {
        /*res.sendFile(path.resolve(__dirname, '..', './views/detalle.html'));*/
        res.render('detalle');
    }
}

module.exports = controller;