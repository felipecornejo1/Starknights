/*const path = require('path');*/

const controller =
{
    home: (req, res) => {
        /*res.sendFile(path.resolve(__dirname, '..', './views/home.html'));*/
        res.render('home');
    },
    proximamente: (req, res) => {
        /*res.sendFile(path.resolve(__dirname, '..', './views/proximamente.html'));*/
        res.render('proximamente', {user: req.session.loggedUser});
    }


};

module.exports = controller;