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

  // PRODUCTS

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

    const mysql = require("mysql");
    require("dotenv").config();

    // console.log(envdata);
    // console.log(process.env)
    // console.log(process.env.DB_DATABASE)
  }

  // get product by id
  async getProduct(id){
    return new Promise ((resolve, reject) =>{
      this.con.query("SELECT * from prodcuts WHERE id =" + id, (err, result) => {
        if (err){
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  // add product
  async addProduct(product){
    return new Promise((resolve, reject) => {
      this.con.query(`INSERT INTO products (Title, Description, Price, Price_old, IMG_SRC, IMG_alt, Category) 
                      VALUES ('${product.Title}','${product.Description}','${product.Price}','${product.Price_old}','${product.IMG_SRC}','${product.IMG_alt}','${product.Category}')`, (err, result)=> {
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
