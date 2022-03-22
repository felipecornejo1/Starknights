module.exports = (sequelize, dataTypes) => {
    // Alias con el que se llamará esta tabla en otros archivos
    let alias = 'Pets';
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
        }
    }
    // Definir la configuracion de esta tabla
    let config = {
        tableName: 'pets',
        timestamps: false
    }
    // Ejecutar el método define y le pasamos como parametros todo lo que definimos anteriormente
    const Pet = sequelize.define(alias, cols, config);

    // Asociar las foreign keys de esta tabla con las primary keys de otras
    Pet.associate = function(models) {
        //Asociar la columna itemFK con la tabla Items
        Pet.belongsTo(models.Items, {
            as: 'items',
            foreignKey: 'itemFK'
        });
    }
    
    return Pet;
}