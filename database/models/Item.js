module.exports = (sequelize, dataTypes) => {
    let alias = 'Items';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: dataTypes.STRING
        },
        id_type: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        id_owner: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        current_price: {
            allowNull: true,
            type: dataTypes.DECIMAL
        }
    }
    let config = {
        tableName: 'items',
        timestamps: false
    }
    
    const Item = sequelize.define(alias, cols, config);
    return Item;
}