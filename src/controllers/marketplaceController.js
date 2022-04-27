// Importaciones
const {validationResult} = require('express-validator')
const db = require('../../database/models')
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

// Controller
const controller = 
{
    marketplace: (req, res) => {
        if(req.query.hola){
            console.log(req.query.hola);
        }
        else {
            console.log('chau');
        }
        // Traer todos los datos de la tabla items
        db.Items.findAll()
            // Despues de traer los datos, renderizar la vista marketplace y pasarle las variables 'items' (con todos los datos de la tabla items) y 'user' (con los datos del usuario logueado)
            .then(result => {
                fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=ETH&CMC_PRO_API_KEY=8ee850bf-cab3-4069-af24-9a235b318dcc')
                    .then(res => {
                        return res.json();
                    })
                    .then(data => {
                        res.render('products/marketplace', {items: result, ethData: data.data.ETH, ethPrice: data.data.ETH.quote.USD.price, user:req.session.user})
                    })
            })
    },
    carrito: (req, res) => {
        // Renderizar la vista carrito y pasarle la variable 'user' (con los datos del usuario logueado)
        res.render('products/carrito', {user: req.session.user});
    },
    detail: (req, res) => {
        // Traer el item de la base de datos que coincida con el parámetro id
        db.Items.findOne({where: {id: req.params.id}, include: ['owner']})
            // Después de traer ese item, renderizar la vista 'detalle' y pasarle las variables 'item' (con el item encontrado) y 'user' (con los datos del usuario logueado)
            .then(result => {
                fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=ETH&CMC_PRO_API_KEY=8ee850bf-cab3-4069-af24-9a235b318dcc')
                    .then(res => {
                        return res.json();
                    })
                    .then(data => {
                        res.render('products/detalle', {item: result, ethPrice: data.data.ETH.quote.USD.price, user: req.session.user});
                    })
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
            if(req.body.category == 1) {
                db.Items.create({
                    name: req.body.name,
                    typeFK: 1,
                    ownerFK: req.session.user.id,
                    price: req.body.price,
                    picture: 'test-spaceship.png'
                }).then(res.redirect('/marketplace'))
            }
            // En caso de que la categoria seleccionada sea 'armas'
            else if(req.body.category == 2) {
                db.Items.create({
                    name: req.body.name,
                    typeFK: 2,
                    ownerFK: req.session.user.id,
                    price: req.body.price,
                    picture: 'raygun.png'
                }).then(res.redirect('/marketplace'))
            }
            // En caso de que la categoria seleccionada sea 'armaduras'
            else if (req.body.category == 3) {
                db.Items.create({
                    name: req.body.name,
                    typeFK: 3,
                    ownerFK: req.session.user.id,
                    price: req.body.price,
                    picture: 'test-armor.png'
                }).then(res.redirect('/marketplace'))
            }
            // En caso de que la categoria seleccionada sea 'mascotas'
            else if (req.body.category == 4) {
                db.Items.create({
                    name: req.body.name,
                    typeFK: 4,
                    ownerFK: req.session.user.id,
                    price: req.body.price,
                    picture: 'test-pet-1.png'
                }).then(res.redirect('/marketplace'))
            }
            else {
                // Renderizar la vista de nuevo y pasar como error que no hay categoria seleccionada
                res.render('products/product-create-form', {errors: {other: 'noCategory'}});
            }
        }
        // En caso de haber errores de express validator:
        else {
            // Renderizar nuevamente la vista y pasarle las variables 'errors' (con los errores) y 'old' (con los datos que llegaron en el formulario)
            res.render('products/product-create-form', {errors: errors.mapped(), old: req.body})
        }
    },
    // Comprar un item
    buy : (req, res) => {
        db.Items.findByPk(req.params.id)
            .then( result => {
                // Guardar el precio y el balance usando el metodo parseFloat para poder hacer operaciones aritmeticas y comparaciones con los datos
                let price = parseFloat(result.price);
                let buyerBalance = parseFloat(req.session.user.wallet_balance);
                // Aumentar el balance del vendedor
                db.Users.findOne({where: {id: result.ownerFK}, include: [items]})
                .then(user => {
                    let sellerBalance = parseFloat(user.wallet_balance);
                    if(user.typeFK != 1 && user.items.length == 10){
                        db.Users.update({wallet_balance: sellerBalance + price, typeFK: 2}, {where: {id: user.id}});
                    }
                    else if(user.typeFK != 1 && user.items.length == 30){
                        db.Users.update({wallet_balance: sellerBalance + price, typeFK: 3}, {where: {id: user.id}});
                    }
                    else {
                        db.Users.update({wallet_balance: sellerBalance + price}, {where: {id: user.id}});
                    }
                }); 
                // Bajar el balance del comprador
                db.Users.findByPk(req.session.user.id, {include: ['items']})
                    .then(user => {
                        if(user.typeFK != 1 && user.items.length == 9){
                            db.Users.update({wallet_balance: buyerBalance - price, typeFK: 3}, {where: {id: req.session.user.id}});
                        }
                        else if(user.typeFK != 1 && user.items.length == 29){
                            db.Users.update({wallet_balance: buyerBalance - price, typeFK: 4}, {where: {id: req.session.user.id}});
                        }
                        else {
                            db.Users.update({wallet_balance: buyerBalance - price}, {where: {id: req.session.user.id}});
                        }
                    })
                // Cambiar el dueño del item y su precio
                db.Items.update({ownerFK: req.session.user.id, price: null}, {where: {id: req.params.id}});
                // Subir datos a la tabla de transacciones
                db.Transactions.create({
                    buyerFK: req.session.user.id,
                    sellerFK: result.ownerFK,
                    amount: result.price,
                    itemFK: result.id,
                    date: new Date()
                });
                res.render('products/detalle', {item: result, user: req.session.user, justBought: true})
            });
    },
    sell: (req, res) => {
        db.Items.update({price: req.body.price}, {where: {id: req.params.id}})
            .then(result => {
                res.redirect('/marketplace/detail/' + req.params.id)
            })
    },
    cancelSale: (req, res) => {
        db.Items.update({price: null}, {where: {id: req.params.id}})
            .then(result => {
                res.redirect('/marketplace/detail/' + req.params.id)
            })
    },
    edit: (req, res) => {
        res.send('hola')
    },
    destroy : (req, res) => {
        // Eliminar el item dentro de la base de datos cuyo id coincida con el que llegó por params
        db.Items.destroy({where: {id: req.params.id}})
            .then(res.redirect('/marketplace'));
	}
};

module.exports = controller;