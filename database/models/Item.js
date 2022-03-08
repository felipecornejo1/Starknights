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
        typeFK: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        ownerFK: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        price: {
            allowNull: true,
            type: dataTypes.DECIMAL
        },
        image: {
            allowNull: true,
            type: dataTypes.STRING
        }
    }
    let config = {
        tableName: 'items',
        timestamps: false
    }
    
    const Item = sequelize.define(alias, cols, config);

    Item.associate = function(models) {
        Item.belongsTo(models.ItemTypes, {
            as: 'types',
            foreignKey: 'typeFK'
        })
    }
    
    return Item;
}