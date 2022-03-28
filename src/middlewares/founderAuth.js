module.exports = (req, res, next) => {
    const db = require('../../database/models');
    // Si el usuario es tipo 'founder', seguir adelante
    if(req.session.user.typeFK == 1){
        next();
    }
    // De lo contrario renderizar la vista marketplace y pasarle un error
    else {
        db.Items.findAll()
            .then(result => {
                res.render('products/marketplace', {errors: 'userType', items: result, user:req.session.user});
            });
    }
}