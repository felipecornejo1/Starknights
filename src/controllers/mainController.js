// Controller
const controller =
{
    home: (req, res) => {
        // Renderizar la vista home
        res.render('home');
    },
    proximamente: (req, res) => {
        // Renderizar la vista proximamente y pasarle la variable 'user' (con los datos del usuario logueado)
        res.render('proximamente', {user: req.session.loggedUser});
    },
    planetas: (req, res) => {
        res.render('planetas');
    }
};

module.exports = controller;