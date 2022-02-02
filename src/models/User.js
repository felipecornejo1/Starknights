const fs = require("fs");

const user = {
    fileName: "./database/usersDB.json",

    getData: function (){
        return JSON.parse (FileSystem.readFileSync(this.fileName, "utf-8"));
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
        allUsers.push(userData);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, " "));
        return true;
    }
}

<<<<<<< HEAD
module.exports = user;
=======
console.log(User.generateId());
>>>>>>> 793dc7f7bf6143106494090cb018807880a5aab0