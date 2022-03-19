module.exports = (sequelize, dataTypes) => {
    // Alias con el que se llamará esta tabla en otros archivos
    let alias = 'Items';
    // Definir las columnas de esta tabla
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
            type: dataTypes.DECIMAL(10, 3)
        },
        picture: {
            allowNull: true,
            type: dataTypes.STRING
        }
    }
    // Definir la configuracion de esta tabla
    let config = {
        tableName: 'items',
        timestamps: false
    }
    // Ejecutar el método define y le pasamos como parametros todo lo que definimos anteriormente
    const Item = sequelize.define(alias, cols, config);

    // Asociar la primary key de esta tabla con las foreign keys de otras
    Item.associate = function(models) {
        // Asociar la columna id con la tabla Armor
        Item.hasMany(models.Armor, {
            as: 'item',
            foreignKey: 'itemFK'
        });
        Item.hasMany(models.Spaceships, {
            as: 'item',
            foreignKey: 'itemFK'
        });
        Item.hasMany(models.Weapons, {
            as: 'item',
            foreignKey: 'itemFK'
        });
        Item.hasMany(models.Pets, {
            as: 'item',
            foreignKey: 'itemFK'
        });
        Item.hasMany(models.Passes, {
            as: 'item',
            foreignKey: 'itemFK'
        });
    }
    
    // Asociar las foreign keys de esta tabla con las primary keys de otras
    Item.associate = function(models) {
        //Asociar la columna typeFK con la tabla ItemTypes
        Item.belongsTo(models.ItemTypes, {
            as: 'types',
            foreignKey: 'typeFK'
        });
    }
    
    return Item;
}