module.exports = (sequelize, dataTypes) => {
    // Alias con el que se llamará esta tabla en otros archivos
    let alias = 'Planets';
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
        population: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        esi: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        size: {
            allowNull: false,
            type: dataTypes.DECIMAL(10, 2)
        },
        living_conditions: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        solar_systemFK: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        picture: {
            allowNull: false,
            type: dataTypes.STRING(100)
        }
    }
    // Definir la configuracion de esta tabla
    let config = {
        tableName: 'planets',
        timestamps: false
    }
    // Ejecutar el método define y le pasamos como parametros todo lo que definimos anteriormente
    const Planet = sequelize.define(alias, cols, config);

     // Asociar la primary key de esta tabla con las foreign keys de otras
     Planet.associate = function(models) {
        // Asociar la columna id con la tabla Passes
        Planet.hasMany(models.Passes, {
            as: 'planet',
            foreignKey: 'planetFK'
        });
    }
    
    // Asociar las foreign keys de esta tabla con las primary keys de otras
    Planet.associate = function(models) {
        //Asociar la columna solar_systemFK con la tabla SolarSystems
        Planet.belongsTo(models.SolarSystems, {
            as: 'solar_system',
            foreignKey: 'solar_systemFK'
        })
    }
    
    return Planet;
}