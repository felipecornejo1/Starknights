const authMiddleware = (req, res, next) => {
    // En caso de haber un usuario logueado
    if(req.session.user) {
        // Seguir adelante
        next()
    }
    // En caso de no haber ningún usuario logueado
    else {
        // Redirigir al login
        res.redirect('/users/login');
    }
}

module.exports = authMiddleware;