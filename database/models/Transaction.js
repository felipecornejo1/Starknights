module.exports = (sequelize, dataTypes) => {
    let alias = 'Transactions';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        date: {
            allowNull: false,
            type: dataTypes.DATE
        },
        itemFK: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        amount: {
            allowNull: false,
            type: dataTypes.DECIMAL
        },
        buyerFK: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        sellerFK: {
            allowNull: false,
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: 'transactions',
        timestamps: false
    }
    
    const Transaction = sequelize.define(alias, cols, config);

    //! Revisar como hacer muchas asociaciones de hasMany en la misma tabla
    /* Transaction.associate = function(models) {
        Transaction.belongsTo(models.Users, {
            as: 'buyers',
            foreignKey: 'buyerFK'
        }, {
            as: 'sellers',
            foreignKey: 'sellerFK'
        })
    } */

    return Transaction;
}