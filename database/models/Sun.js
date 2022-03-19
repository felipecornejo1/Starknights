module.exports = (sequelize, dataTypes) => {
    // Alias con el que se llamará esta tabla en otros archivos
    let alias = 'Suns';
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
        solar_systemFK: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        type: {
            allowNull: false,
            type: dataTypes.STRING(100)
        }
    }
    // Definir la configuracion de esta tabla
    let config = {
        tableName: 'suns',
        timestamps: false
    }
    // Ejecutar el método define y le pasamos como parametros todo lo que definimos anteriormente
    const Sun = sequelize.define(alias, cols, config);

    // Asociar las foreign keys de esta tabla con las primary keys de otras
    Sun.associate = function(models) {
        //Asociar la columna solar_systemFK con la tabla SolarSystems
        Sun.belongsTo(models.SolarSystems, {
            as: 'solar_system',
            foreignKey: 'solar_systemFK'
        })
    }
    
    return Sun;
}