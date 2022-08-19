const mysql = require('mysql');


exports.Database = class Database{
    constructor(){
        this.con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "test"
        });

        this.con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
        });
    }

    getAllUsers(){
        let users;
        this.con.query("SELECT * FROM user", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            users = result;
        });
        return users;
    }
}

class Database{
    constructor(){
        this.con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "test"
        });

        this.con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
        });
    }

    getAllUsers(){
        let users;
        this.con.query("SELECT * FROM user", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            users = result;
        });
        return users;
    }
}
const db = new Database();
exports.getAllUsers = db.getAllUsers();
