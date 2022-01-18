const fs = require('fs');
const path = require('path');

const itemsFilePath = path.join(__dirname, '../database/itemsDataBase.json')
const items = JSON.parse(fs.readFileSync(itemsFilePath, 'utf-8'))

const controller = 
{
    marketplace: (req, res) => {
        res.render('products/marketplace', {items: items});
    },
    carrito: (req, res) => {
        res.render('products/carrito');
    },
    detail: (req, res) => {
        
        let itemBuscado = (items.filter(function(i){
            return i.id == req.params.id;
        }))[0];
        
        res.render('products/detalle', {item: itemBuscado});
    },
    create: (req, res) => {
        res.render('products/product-create-form')
    },
    store: (req, res) => {

        let newID = items[items.length-1].id + 1;
        let newItem = {
            "id": newID,
            "name": req.body.name,
            "category": req.body.category,
            "price": req.body.price,
            "image": "test-spaceship-2.png"
        }

        items.push(newItem);

        fs.writeFileSync(itemsFilePath, JSON.stringify(items,null,' '));

        res.redirect('/marketplace');
    }
}

module.exports = controller;