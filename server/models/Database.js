const mysql = require('mysql');
require("dotenv").config();

// console.log(envdata);
// console.log(process.env)
// console.log(process.env.DB_DATABASE)
class Database{
    constructor(){
        this.con = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE
        });

        this.con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
        });
    }

    async getAllUsers(){
        return new Promise((resolve, reject) => {
            this.con.query('SELECT * from users', (err, result) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    }

    async getAllProducts() {
        return new Promise((resolve, reject) => {
            this.con.query("SELECT * from products", (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
    async getUserById(id){
        return new Promise((resolve, reject) => {
            this.con.query('SELECT * from users WHERE id = '+id, (err, result) => {
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
