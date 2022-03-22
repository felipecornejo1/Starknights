module.exports = (sequelize, dataTypes) => {
    // Alias con el que se llamará esta tabla en otros archivos
    let alias = 'Spaceships';
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
        speed: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        color: {
            allowNull: false,
            type: dataTypes.STRING(100)
        },
        armor: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        weight: {
            allowNull: false,
            type: dataTypes.DECIMAL(10, 2)
        }
    }
    // Definir la configuracion de esta tabla
    let config = {
        tableName: 'spaceships',
        timestamps: false
    }
    // Ejecutar el método define y le pasamos como parametros todo lo que definimos anteriormente
    const Spaceship = sequelize.define(alias, cols, config);

    // Asociar las foreign keys de esta tabla con las primary keys de otras
    Spaceship.associate = function(models) {
        //Asociar la columna itemFK con la tabla Items
        Spaceship.belongsTo(models.Items, {
            as: 'items',
            foreignKey: 'itemFK'
        });
    }
    
    return Spaceship;
}