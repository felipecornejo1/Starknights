module.exports = (sequelize, dataTypes) => {
    // Alias con el que llamaremos a esta tabla en otros archivos
    let alias = 'Users';
    // Definir las columnas de esta tabla
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        username: {
            allowNull: false,
            type: dataTypes.STRING
        },
        email: {
            allowNull: false,
            type: dataTypes.STRING
        },
        profile_picture: {
            allowNull: true,
            type: dataTypes.STRING
        },
        password: {
            allowNull: false,
            type: dataTypes.STRING
        },
        created_at: {
            allowNull: false,
            type: dataTypes.DATE
        },
        wallet_balance: {
            allowNull: false,
            type: dataTypes.DECIMAL(10, 3)
        },
        typeFK: {
            allowNull: true,
            type: dataTypes.INTEGER
        },
        claimed_airdrop: {
            allowNull: true,
            type: dataTypes.INTEGER(1)
        }
    }
    // Definir la configuración de esta tabla
    let config = {
        tableName: 'users',
        timestamps: false
    }
    
    // Ejecutar el método define y le pasamos como parametros todo lo que definimos anteriormente
    const User = sequelize.define(alias, cols, config);
    
    return User;
}