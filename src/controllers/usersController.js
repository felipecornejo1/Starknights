const {validationResult} = require('express-validator')
const bcrypt = require('bcryptjs');
const {Op} = require('sequelize')

// Importar modelos de Sequelize (Base de datos)
const db = require('../../database/models');

// Controller
const controller = {
    login: (req, res) => {
        // Renderizar la vista de login
        res.render('users/login');
    },
    sendLogin: (req, res) => {
        // El proceso de login se hizo mediante middlewares, por eso en el controller solo redirigimos al home
        res.redirect('/');
    },
    register: (req, res) => {
        // Renderizar la vista de register
        res.render('users/register');
    },
    sendRegister: (req, res) => {
        // Tomar errores de express validator en variable 'errors'
        let errors = validationResult(req);
        req.body.password = bcrypt.hashSync(req.body.password, 10);

        // En caso de no haber errores:
        if(errors.isEmpty()) {

            // En caso de llegar un archivo
            if(req.file) {
                // Crear un usuario nuevo en la base de datos, dentro de la tabla users (con imagen de perfil)
                db.Users.create({
                    ...req.body,
                    profile_picture: req.file.filename,
                    created_at: Date.now(),
                    wallet_balance: 0,
                    typeFK: 2
                })
                // Redirigir al login
                res.redirect('/users/login');

            }
            // En caso de no llegar un archivo
            else {
                // Crear un usuario nuevo en la base de datos, dentro de la tabla users (sin imagen de perfil)
                db.Users.create({
                    ...req.body,
                    profile_picture: 'default.jpg',
                    created_at: Date.now(),
                    wallet_balance: 0,
                    typeFK: 2
                });
                // Redirigir al login
                res.redirect('/users/login')
            }
        }
        // En caso de haber errores:
        else {
            // Renderizar la vista register y pasarle las variables errors (con los errores) y old (con los datos que llegaron desde el formulario)
            res.render('users/register', {errors: errors.mapped(), old: req.body});
        }
    },
    profileAccount: (req, res) => {
        // Renderizar la vista profile
        res.render('users/profile/account', {user: req.session.user});
    },
    visit: (req, res) => {
        db.Users.findByPk(req.params.id, {include: ['type', 'items']})
            .then(result => {
                if(result != undefined) {
                    res.render('users/profile/visit', {user: req.session.user, visiting: result});
                }
                else {
                    res.render('404')
                }
            })
    },
    ethAirdrop: (req, res) => {
        if(req.session.user.claimed_airdrop != 1) {
            db.Users.update({wallet_balance: req.session.user.wallet_balance + 1, claimed_airdrop: 1}, {where: {id: req.session.user.id}});
            res.redirect('/users/profile/account')
        }
        else {
            res.render('users/profile/account', {user: req.session.user, errors: {airdrop: 'Ya reclamaste este airdrop'}})
        }
    },
    profileInventory: (req, res) => {
        // Buscar en la db los items que sean propiedad de este usuario
        db.Items.findAll({where: {ownerFK: req.session.user.id}})
            .then(result => {
                res.render('users/profile/inventory', {items: result, user: req.session.user})
            });
    },
    profileActivity: (req, res) => {
        // Buscar en la db las transacciones donde haya participado este usuario e incluir las asociaciones de la tabla
        db.Transactions.findAll({
            include: ['buyer', 'seller', 'item'],
            where: {
                [Op.or]: [
                    { buyerFK: req.session.user.id },
                    { sellerFK: req.session.user.id }
                ]
            },
            order: [
                ['date', 'DESC'],
            ],
        })
            .then(result => {
                res.render('users/profile/activity', {user: req.session.user, transactions: result})
            })
    },
    profileSettings: (req, res) => {
        res.render('users/profile/settings', {user: req.session.user})
    },
    logout: (req, res) => {
        // Eliminar la session y las variables en locals
        req.session.destroy();
        res.locals.user = undefined;
		res.locals.isUserLogged = false;
        // Eliminar la cookie
        res.clearCookie('email');
        //Redirigir
        res.redirect('/')
    }
}

module.exports = controller;