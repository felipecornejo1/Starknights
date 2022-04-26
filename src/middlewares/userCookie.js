// Importar los modelos de sequelize (base de datos)
const db = require('../../database/models')

const userCookie = (req, res, next) => {
	// Crear la variable isUserLogged dentro de locals y darle como valor inicial false
	res.locals.isUserLogged = false;

	// En caso de existir una cookie llamada email
	if(req.cookies.email !== undefined) {
		// Buscar un usuario dentro de la base de datos, cuyo email coincida con el guardado dentro de la cookie
		db.Users.findOne({
			where: {email: req.cookies.email}
		})
			.then(user => {
				// Guardar todos los datos del usuario en la variable user dentro de session
				req.session.user = user;
				// Guardar todos los datos del usuario en la variable user dentro de locals
				res.locals.user = user;
				// Cambiar el valor de la variable isUserLogged (dentro de locals) a true
				res.locals.isUserLogged = true;
				// Seguir adelante
				next()
			})
	}
	// En caso de no existir ninguna cookie llamada email
	else {
		// Seguir adelante sin hacer nada
		next()
	}
}

module.exports = userCookie;