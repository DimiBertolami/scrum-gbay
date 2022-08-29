const mysql = require("mysql");
require("dotenv").config();
//console.log(process.env.DB_DATABASE);
    class Database {
      constructor() {
        this.con = mysql.createConnection({
          port: process.env.DB_PORT,
          host: process.env.DB_HOST,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE,
        });}

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

  // add user
  async addUser(user) {
    return new Promise((resolve, reject) => {
      this.con.query(`INSERT INTO users (Username, FirstName, LastName, Password, Email, GSM, StreetName,
                                         HouseNumber_Plus_BOX, city, Postal_code, IsAdmin)
                      VALUES ('${user.Username}', '${user.FirstName}', '${user.LastName}', '${user.Password}',
                              '${user.Email}', '${user.GSM}', '${user.StreetName}', '${user.HouseNumber_Plus_BOX}',
                              '${user.city}', '${user.Postal_code}', '${user.IsAdmin}')`, (err, result) => {
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
  }

  // get product by id
  async getProductById(id) {
    return new Promise((resolve, reject) => {
      this.con.query("SELECT * from products WHERE id =" + id, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }


// get product by category
  async getProductByCategory(categoryID) {
    return new Promise((resolve, reject) => {
      this.con.query("SELECT * from products WHERE CategoryID = '" + categoryID + "'", (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }


  // add product
  async addProduct(product) {
    console.log(product)
    return new Promise((resolve, reject) => {
      this.con.query(`INSERT INTO products (Title, Description, Price, Price_old, IMG_SRC, IMG_alt, CategoryID)
                      VALUES ('${product.title}', '${product.description}', '${product.price}', '${product.price_old}',
                              '${product.img_src}', '${product.img_alt}', '${product.categoryID}')`, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
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

// CATEGORIES
  async getAllCategories() {
    return new Promise((resolve, reject) => {
      this.con.query("SELECT * from categories ", (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

// ORDERS

  async addOrder(order){
    return new Promise((resolve, reject) => {
      this.con.query(`INSERT INTO orders (userID, productID, Quantity)
                      VALUES ('${order.userID}', '${order.productID}', '${order.Quantity}')`, (err, result) => {
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
