module.exports = (sequelize, dataTypes) => {
    // Alias con el que se llamará esta tabla en otros archivos
    let alias = 'Armor';
    // Definir las columnas de esta tabla
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        itemFK: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        type: {
            allowNull: false,
            type: dataTypes.STRING(100)
        },
        rarity: {
            allowNull: false,
            type: dataTypes.STRING(100)
        },
        weight: {
            allowNull: false,
            type: dataTypes.DECIMAL(10, 2)
        },
        durability: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        mutation: {
            allowNull: true,
            type: dataTypes.STRING(100)
        }
    }
    // Definir la configuracion de esta tabla
    let config = {
        tableName: 'armor',
        timestamps: false
    }
    // Ejecutar el método define y le pasamos como parametros todo lo que definimos anteriormente
    const Armor = sequelize.define(alias, cols, config);

    // Asociar las foreign keys de esta tabla con las primary keys de otras
    Armor.associate = function(models) {
        //Asociar la columna itemFK con la tabla Items
        Armor.belongsTo(models.Items, {
            as: 'items',
            foreignKey: 'itemFK'
        });
    }
    
    return Armor;
}