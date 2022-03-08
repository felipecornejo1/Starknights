module.exports = (sequelize, dataTypes) => {
    let alias = 'Users';
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
        }
    }
    let config = {
        tableName: 'users',
        timestamps: false
    }
    
    const User = sequelize.define(alias, cols, config);
    return User;
}