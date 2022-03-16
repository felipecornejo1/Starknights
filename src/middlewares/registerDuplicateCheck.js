const bd = require('../../database/models');

const registerDuplicateCheck = (req, res, next) => {
    bd.Users.findAll({where: {email: req.body.email}})
        .then(result => {
            var emailResult = result;
            bd.Users.findAll({where: {name: req.body.usuario}})
                .then(result => {
                    let userResult = result;
                    let emailDuplicate = false;
                    let userDuplicate = false

                    if(emailResult.length > 0) {
                        emailDuplicate = true
                    }
                    if(userResult.length > 0) {
                        userDuplicate = true;
                    }

                    if(emailDuplicate == true || userDuplicate == true){
                        res.render('users/register', {errors: {emailDuplicate: emailDuplicate, userDuplicate: userDuplicate}, old: req.body});
                    }
                    else {
                        next();
                    }

                });
        });
}

module.exports = registerDuplicateCheck;