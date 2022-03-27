const db = require('../../database/models');

const buyCheck = (req, res, next) => {
    db.Items.findOne({where: {id: req.params.id}})
        .then(result => {
            let price = parseFloat(result.price);
            let balance = parseFloat(req.session.user.wallet_balance);
            if(result.ownerFK != req.session.user.id) {
                if(balance > price) {
                    next()
                    console.log('1');
                }
                else {
                    res.render('products/detalle', {item: result, user: req.session.user, errors: 'balance'});
                    console.log("balance");
                    console.log('precio: ' + price + ' balance: ' + balance);
                    console.log('precio isNaN ' + isNaN(price));
                    console.log('balance isNaN ' + isNaN(balance));
        }
            }
            else {
                res.render('products/detalle', {item: result, user: req.session.user, errors: 'ownership'});
                console.log('ownership');
            }
        });
}

module.exports = buyCheck