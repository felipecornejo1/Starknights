module.exports = (sequelize, dataTypes) => {
    // Alias con el que se llamará esta tabla en otros archivos
    let alias = 'UserTypes';
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
        tableName: 'user_types',
        timestamps: false
    }
    // Ejecutar el método define y le pasamos como parametros todo lo que definimos anteriormente
    const UserType = sequelize.define(alias, cols, config);

    // Asociar la primary key de esta tabla con las foreign keys de otras
    UserType.associate = function(models) {
        // Asociar la columna id con la tabla Items
        UserType.hasMany(models.Users, {
            as: 'users',
            foreignKey: 'typeFK'
        })
    }

    return UserType;
}
