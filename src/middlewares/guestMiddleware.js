const guestMiddleware = (req, res, next) => {
    // En caso de haber un usuario logueado
    if(req.session.user) {
        // Redirigir al perfil
        res.redirect('/users/profile');
    }
    // En caso de no haber ningún usuario logueado
    else {
        // Seguir adelante
        next()
    }
}

module.exports = guestMiddleware;