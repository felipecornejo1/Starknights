module.exports = (sequelize, dataTypes) => {
    // Alias con el que se llamará esta tabla en otros archivos
    let alias = 'Passes';
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
        planetFK: {
            allowNull: false,
            type: dataTypes.INTEGER
        }
    }
    // Definir la configuracion de esta tabla
    let config = {
        tableName: 'passes',
        timestamps: false
    }
    // Ejecutar el método define y le pasamos como parametros todo lo que definimos anteriormente
    const Pass = sequelize.define(alias, cols, config);

    // Asociar las foreign keys de esta tabla con las primary keys de otras
    Pass.associate = function(models) {
        // Asociar la columna planetFK con la tabla Planets
        Pass.belongsTo(models.Planets, {
            as: 'planet',
            foreignKey: 'planetFK'
        });
        // Asociar la columna itemFK con la tabla Items
        Pass.belongsTo(models.Items, {
            as: 'item',
            foreignKey: 'itemFK'
        });
    }
    
    return Pass;
}