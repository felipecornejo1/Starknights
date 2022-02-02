const guestMiddleware = (req, res, next) => {
    if(req.session.loggedUser) {
        res.send('No puedes acceder a esta página si ya iniciaste sesión')
    }
    else {
        next()
    }
}

module.exports = guestMiddleware;