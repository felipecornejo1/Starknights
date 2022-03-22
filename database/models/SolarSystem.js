module.exports = (sequelize, dataTypes) => {
    // Alias con el que se llamará esta tabla en otros archivos
    let alias = 'SolarSystems';
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
        }
    }
    // Definir la configuracion de esta tabla
    let config = {
        tableName: 'solar_systems',
        timestamps: false
    }
    // Ejecutar el método define y le pasamos como parametros todo lo que definimos anteriormente
    const SolarSystem = sequelize.define(alias, cols, config);

     // Asociar la primary key de esta tabla con las foreign keys de otras
     SolarSystem.associate = function(models) {
        // Asociar la columna id con la tabla Suns
        SolarSystem.hasMany(models.Suns, {
            as: 'suns',
            foreignKey: 'solar_systemFK'
        });
        // Asociar la columna id con la tabla Planets
        SolarSystem.hasMany(models.Planets, {
            as: 'planets',
            foreignKey: 'solar_systemFK'
        });
    }
    
    return SolarSystem;
}