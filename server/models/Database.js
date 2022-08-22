const mysql = require("mysql");
require("dotenv").config(); // this is all that is 'required' lolzzzz
console.log(process.env.DB_DATABASE);
class Database {
  constructor() {
    this.con = mysql.createConnection({
      port: process.env.DB_PORT,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    });

    this.con.connect(function (err) {
      if (err) throw err;
      console.log("Connected!");
    });
  }

  async getAllUsers() {
    return new Promise((resolve, reject) => {
      this.con.query("SELECT * from users", (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  async getUserById(id) {
    return new Promise((resolve, reject) => {
      this.con.query("SELECT * from users WHERE id = " + id, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  // get all products
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
}
const db = new Database();
exports.Database = db;
