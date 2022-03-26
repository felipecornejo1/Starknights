// Importar la libreria bcrypt y los modelos de sequelize (base de datos)
const bcrypt = require('bcryptjs');
const bd = require('../../database/models')

const loginDataCheck = (req, res, next) => {
    // Guardar el usuario y contraseña que llegaron por formulario en una variable cada uno
    let reqUser = req.body.username;
    let reqPassword = req.body.password;

    //Buscar un usuario en la base de datos cuyo nombre de usuario coincida con el buscado
    bd.Users.findOne({
        where: {
            username: reqUser
        }
    })
        .then(result => {
            // En caso de que se haya encontrado un usuario
            if(result != null) {
                // Comparar la contraseña ingresada en el formulario con la contraseña encriptada que está guardada en la base de datos
                if (bcrypt.compareSync(reqPassword, result.password) == true) {
                    // Si la comparación es exitosa, guardar todos los datos del usuario (disponibles en la base de datos) en la variable loggedUser dentro de session
                    req.session.loggedUser = result;
                    // Crear una cookie llamada 'email' que contenga el email del usuario encontrado
                    res.cookie('email', result.email)
                    // Seguir adelante
                    next()
                }
                // En caso de que la contraseña NO sea correcta
                else{
                    // Renderizar la vista del login y pasar las variables errors (con el mensaje de error) y old (con los datos que llegaron por body)
                    res.render('users/login', {errors: {
                        username: {
                            msg: 'Las credenciales son inválidas'
                        }
                    },
                        old: req.body
                    }) 
                }
            }
            // En caso de no encontrarse ningun usuario con el mismo nombre en la base de datos
            else {
                // Renderizar la vista del login y pasar las variables errors (con el mensaje de error) y old (con los datos que llegaron por body)
                res.render('users/login', {errors: {
                    username: {
                        msg: 'Las credenciales son inválidas'
                    }
                },
                    old: req.body
                })
            }
        })
}

module.exports = loginDataCheck;