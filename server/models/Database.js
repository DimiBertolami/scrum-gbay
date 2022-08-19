const mysql = require('mysql');
class Database{
    constructor(){
        this.con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "gbay"
        });

        this.con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
        });
    }

    async getAllUsers(){
        return new Promise((resolve, reject) => {
            this.con.query('SELECT * from user', (err, result) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    }

    async getUserById(id){
        return new Promise((resolve, reject) => {
            this.con.query('SELECT * from user WHERE id = '+id, (err, result) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    }
}
const db = new Database();
exports.Database = db;
