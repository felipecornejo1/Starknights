const db = require('../../database/models');

const buyerCheck = (req, res, next) => {
    db.Items.findOne({where: {id: req.params.id}})
        .then(result => {
            if(result.ownerFK != req.session.user.id) {
                if(req.session.user.wallet_balance > result.price) {
                    next()
                    console.log('1');
                }
                else {
                    res.render('products/detalle', {item: result, user: req.session.user, errors: 'balance'});
                    console.log("balance");
                    console.log('precio: ' + result.price + ' balance: ' + req.session.user.wallet_balance);
                    console.log(result.price > req.session.user.wallet_balance)
                }
            }
            else {
                res.render('products/detalle', {item: result, user: req.session.user, errors: 'ownership'});
                console.log('ownership');
            }
        });
}

module.exports = buyerCheck