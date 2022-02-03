const path = require('path');
const fs = require('fs');

const userDBPath = path.resolve(__dirname, "../database/usersDB.json");
const userDB = JSON.parse(fs.readFileSync(userDBPath, "utf8"));

const userCookie = (req, res, next) => {
	res.locals.isUserLogged = false;

	if(req.cookies.email !== undefined) {
		const userToLogin = userDB.find(oneUser => oneUser.email === req.cookies.email);
		req.session.user = userToLogin;
        res.locals.user = userToLogin;
		res.locals.isUserLogged = true;
	}

	next();
}

module.exports = userCookie;