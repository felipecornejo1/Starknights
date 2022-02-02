const fs = require("fs");

const user = {
    fileName: "./database/usersDB.json",

    getData: function (){
        return JSON.parse (FileSystem.readFileSync(this.fileName, "utf-8"));
    },

    findAll: function(){
        return this.getData();
    },

    findByPk: function (id) {
        let allUsers = thi.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },

    findByField: function (field, text) {
        let allUsers = thi.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },

    create: function (userData){
        let allUsers = thi.findAll();
        allUsers.push(userData);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, " "));
        return true;
    }
};

console.log(User.getData());