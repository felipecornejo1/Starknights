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
        picture: {
            allowNull: true,
            type: dataTypes.STRING
        },
        password: {
            allowNull: false,
            type: dataTypes.STRING
        }
    }
    let config = {
        tableName: 'users',
        timestamps: false
    }
    
    const User = sequelize.define(alias, cols, config);
    return User;
}