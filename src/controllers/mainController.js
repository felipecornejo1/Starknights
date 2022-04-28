const db = require('../../database/models');
// Controller
const controller =
{
    home: (req, res) => {
        // Renderizar la vista home
        res.render('home');
    },
    proximamente: (req, res) => {
        // Renderizar la vista proximamente y pasarle la variable 'user' (con los datos del usuario logueado)
        res.render('proximamente', {user: req.session.user});
    },
    planetas: (req, res) => {
        db.Planets.findAll({include: ['solar_system']})
            .then(result => {
                console.log(result);
                res.render('planetas', {planets: result});
            })
    },
    historia: (req, res) => {
        res.render('historia');
    }
};

module.exports = controller;