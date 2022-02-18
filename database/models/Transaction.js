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
        id_item: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        price: {
            allowNull: false,
            type: dataTypes.DECIMAL
        },
        id_buyer: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        id_seller: {
            allowNull: false,
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: 'transactions',
        timestamps: false
    }
    
    const Transaction = sequelize.define(alias, cols, config);
    return Transaction;
}