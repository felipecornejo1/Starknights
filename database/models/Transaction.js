module.exports = (sequelize, dataTypes) => {
    // Alias con el que se llamará esta tabla en otros archivos
    let alias = 'Transactions';
    // Definir las columnas de esta tabla
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
    // Definir la configuracion de esta tabla
    let config = {
        tableName: 'transactions',
        timestamps: false
    }
    // Ejecutar el método define y le pasamos como parametros todo lo que definimos anteriormente
    const Transaction = sequelize.define(alias, cols, config);

    // Asociar las foreign keys de esta tabla con las primary keys de otras
     Transaction.associate = function(models) {
        // Asociar la columna buyerFK con la tabla users
        Transaction.belongsTo(models.Users, {
            as: 'buyers',
            foreignKey: 'buyerFK'
        });
        // Asociar la columna sellerFK con la tabla users
        Transaction.belongsTo(models.Users, {
            as: 'sellers',
            foreignKey: 'sellerFK'
        });
    }

    return Transaction;
}