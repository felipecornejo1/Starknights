const db = require('../../database/models');

const buyerCheck = (req, res, next) => {
    db.Items.findOne({where: {id: req.params.id}})
        .then(result => {
            if(result.ownerFK != req.session.user.id) {
                if(result.price < req.session.user.wallet_balance) {
                    next()
                }
                else {
                    res.render('products/detalle', {item: result, user: req.session.user, errors: 'balance'});
                }
            }
            else {
                res.render('products/detalle', {item: result, user: req.session.user, errors: 'ownership'});
            }
        })
}

module.exports = buyerCheck