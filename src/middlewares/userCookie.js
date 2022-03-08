const db = require('../../database/models')

const userCookie = (req, res, next) => {
	res.locals.isUserLogged = false;

	if(req.cookies.email !== undefined) {
		db.Users.findOne({
			where: {email: req.cookies.email}
		})
			.then(user => {
				req.session.user = user;
				res.locals.user = user;
				res.locals.isUserLogged = true;
				next()
			})
	}
	else {
		next()
	}
}

module.exports = userCookie;