const fs = require('fs');
const path = require('path');

const db = require('../../database/models')

const items = db.Items.findAll()

const controller = 
{
    marketplace: (req, res) => {
        db.Items.findAll()
            .then(result => {
                res.render('products/marketplace', {items: result, user:req.session.loggedUser})
            })
    },
    carrito: (req, res) => {
        res.render('products/carrito', {user: req.session.loggedUser});
    },
    detail: (req, res) => {

        db.Items.findOne({where: {id: req.params.id}})
            .then(result => {
                res.render('products/detalle', {item: result, user: req.session.loggedUser});
            });
    },
    create: (req, res) => {
        res.render('products/product-create-form')
    },
    store: (req, res) => {
        if(req.body.category == 'naves') {
            db.Items.create({
                name: req.body.name,
                typeFK: 1,
                ownerFK: req.session.user.id,
                price: req.body.price,
                image: 'test-spaceship.png'
            }).then(res.redirect('/marketplace'))
        }
        else if (req.body.category == 'armaduras') {
            db.Items.create({
                name: req.body.name,
                typeFK: 2,
                ownerFK: req.session.user.id,
                price: req.body.price,
                image: 'test-armor.png'
            }).then(res.redirect('/marketplace'))
        }
        else {
            db.Items.create({
                name: req.body.name,
                typeFK: 3,
                ownerFK: req.session.user.id,
                price: req.body.price,
                image: 'test-pet-1.png'
            }).then(res.redirect('/marketplace'))
        }
    },
    destroy : (req, res) => {
        db.Items.destroy({where: {id: req.params.id}})
            .then(res.redirect('/marketplace'));
	}
};

module.exports = controller;