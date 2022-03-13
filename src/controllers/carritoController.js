// Importar validationResult
const {validationResult} = require('express-validator')

// Importar los modelos de Sequelize (base de datos)
const db = require('../../database/models')

const controller =
{
    carrito: (req, res) => {
        // Renderizar la vista carrito)
        res.render('products/carrito', {user: req.session.user});
    },
    comprar: (req, res) => {
        // Renderizar la vista comprar)
        res.render('products/comprar');
    },
    marketplace: (req, res) => {
        // Traer todos los datos de la tabla items
        db.Items.findAll()
            // Despues de traer los datos, renderizar la vista marketplace y pasarle las variables 'items' (con todos los datos de la tabla items) y 'user' (con los datos del usuario logueado)
            .then(result => {
                res.render('products/marketplace', {items: result, user:req.session.user})
            })
    },
}


module.exports = controller;