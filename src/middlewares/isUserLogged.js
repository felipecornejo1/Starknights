const isUserLogged = (req, res, next) => {
    if(req.session.loggedUser) {
        res.locals.user = req.session.loggedUser 
    }
    next()
}

module.exports = isUserLogged