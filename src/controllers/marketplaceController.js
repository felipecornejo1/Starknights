// Importar validationResult
const {validationResult} = require('express-validator')

// Importar los modelos de Sequelize (base de datos)
const db = require('../../database/models')

// Controller
const controller = 
{
    marketplace: (req, res) => {
        // Traer todos los datos de la tabla items
        db.Items.findAll()
            // Despues de traer los datos, renderizar la vista marketplace y pasarle las variables 'items' (con todos los datos de la tabla items) y 'user' (con los datos del usuario logueado)
            .then(result => {
                res.render('products/marketplace', {items: result, user:req.session.user})
            })
    },
    carrito: (req, res) => {
        // Renderizar la vista carrito y pasarle la variable 'user' (con los datos del usuario logueado)
        res.render('products/carrito', {user: req.session.user});
    },
    detail: (req, res) => {
        // Traer el item de la base de datos que coincida con el parámetro id
        db.Items.findOne({where: {id: req.params.id}})
            // Después de traer ese item, renderizar la vista 'detalle' y pasarle las variables 'item' (con el item encontrado) y 'user' (con los datos del usuario logueado)
            .then(result => {
                res.render('products/detalle', {item: result, user: req.session.user});
            });
    },
    create: (req, res) => {
        // Renderizar la vista con el formulario para crear items
        res.render('products/product-create-form')
    },
    store: (req, res) => {
        // Tomar errores de express validator en la variable 'errors'
        let errors = validationResult(req);
        // En caso de no haber errores:
        if(errors.isEmpty()) {
            // En caso de que la categoria seleccionada sea 'naves'
            if(req.body.category == 'naves') {
                db.Items.create({
                    name: req.body.name,
                    typeFK: 1,
                    ownerFK: req.session.user.id,
                    price: req.body.price,
                    picture: 'test-spaceship.png'
                }).then(res.redirect('/marketplace'))
            }
            // En caso de que la categoria seleccionada sea 'armaduras'
            else if (req.body.category == 'armaduras') {
                db.Items.create({
                    name: req.body.name,
                    typeFK: 3,
                    ownerFK: req.session.user.id,
                    price: req.body.price,
                    picture: 'test-armor.png'
                }).then(res.redirect('/marketplace'))
            }
            // En caso de que la categoria seleccionada sea 'mascotas'
            else if (req.body.category == 'mascotas') {
                db.Items.create({
                    name: req.body.name,
                    typeFK: 4,
                    ownerFK: req.session.user.id,
                    price: req.body.price,
                    picture: 'test-pet-1.png'
                }).then(res.redirect('/marketplace'))
            }
            else {
                //TODO: hacer que renderice de nuevo la vista product-create-form y pase como error que no se seleccionó ninguna categoría
                //! Placeholder: redirect a proximamente. Cuando se haga lo mencionado arriba borrar esta linea y la siguiente
                res.redirect('/proximamente');
            }
        }
        // En caso de haber errores de express validator:
        else {
            // Renderizar nuevamente la vista y pasarle las variables 'errors' (con los errores) y 'old' (con los datos que llegaron en el formulario)
            res.render('products/product-create-form', {errors: errors.mapped(), old: req.body})
        }
    },
    buy : (req, res) => {
        db.Items.findOne({where: {id: req.params.id}})
            .then( result => {
                db.Items.update({ownerFK: req.session.user.id, price: null}, {where: {id: req.params.id}});
                db.Users.update({wallet_balance: req.session.user.wallet_balance - result.price}, {where: {id: req.session.user.id}})
                res.render('products/detalle', {item: result, user: req.session.user, justBought: true})
            });
    },
    destroy : (req, res) => {
        // Eliminar el item dentro de la base de datos cuyo id coincida con el que llegó por params
        db.Items.destroy({where: {id: req.params.id}})
            .then(res.redirect('/marketplace'));
	}
};

module.exports = controller;