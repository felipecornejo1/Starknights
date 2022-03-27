const db = require('../../database/models');

const editCheck = (req, res, next) => {
    db.Items.findOne({where: {id: req.params.id}})
        .then(
            item => {
                if(item.ownerFK == req.session.user.id){
                    next();
                }
                else {
                    res.render('products/detalle', {item: item, user: req.session.user, errors: 'ownership'});
                }
            }
        );
}

module.exports = editCheck;