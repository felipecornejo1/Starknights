const db = require('../../../database/models');

const controller = {
    index: (req, res) => {
        db.Users.findAll()
            .then(result => {
                return res.status(200).json({
                    total: result.length,
                    data: result,
                    status: 200
                })
            })
    },
    find: (req, res) => {
        if(req.session.user.id == req.params.id){
            db.Users.findAll({where: {id: req.params.id}})
                .then(result => {
                    return res.status(200).json({
                        total: result.length,
                        data: result,
                        status: 200
                    })
                })
        }
        else {
            res.json({
                wallet_balance: 'Prohibido'
            })
        }
    }
}

module.exports = controller;