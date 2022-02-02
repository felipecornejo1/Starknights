const fs = require("fs");
const path = require('path')
const usersFilePath = path.join(__dirname, '../database/usersDB.json')

const user = {

    getData: function (){
        return JSON.parse (fs.readFileSync(usersFilePath, "utf-8"));
    },

    generateId: function(){
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser){
            return lastUser.id + 1;
        }
        return 1;
    },

    findAll: function(){
        return this.getData();
    },

    findByPk: function (id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },

    findByField: function (field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },

    create: function (userData){
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(userData);
        fs.writeFileSync(usersFilePath, JSON.stringify(allUsers, null, " "));
        return true;
    }
}

module.exports = user;
