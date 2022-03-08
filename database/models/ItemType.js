module.exports = (sequelize, dataTypes) => {
    let alias = 'ItemTypes';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: dataTypes.STRING
        }
    }
    let config = {
        tableName: 'item_types',
        timestamps: false
    }
    
    const ItemType = sequelize.define(alias, cols, config);

    ItemType.associate = function(models) {
        ItemType.hasMany(models.Items, {
            as: 'types',
            foreignKey: 'typeFK'
        })
    }

    return ItemType;
}
