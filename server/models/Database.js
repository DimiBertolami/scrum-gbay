const mysql = require("mysql");
require("dotenv").config();

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

  // add user
  async newUser(User){
    return new Promise((resolve, reject) => {
      this.con.query(`INSERT INTO users (Username, FirstName, LastName, Password, Email, GSM, StreetName, HouseNumber_Plus_BOX, city, Postal_code, IsAdmin) 
                      VALUES ('${user.Username}','${user.FirstName}','${user.LastName}','${user.Password}','${user.Email}','${user.GSM}','${user.StreetName}','${user.HouseNumber_Plus_BOX}','${user.city}','${user.Postal_code}','${user.IsAdmin}')`, (err, result)=> {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  // PRODUCTS
  //Yascheroni
  //async yGetAllProducts(){
    // const ollemaoepnestokmesatekruie = 'SELECT * FROM products';
  //  return new Promise((resolve,reject)=>{
   //   this.con.query(ollemaoepnestokmesatekruie,(error,result)=>{
  //    if(error){
     //     reject(error)
       // }else{
         // resolve(result)
      //  }
    //  })
   // })
 // }

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
  async getProductById(id){
    return new Promise ((resolve, reject) => {
      this.con.query("SELECT * from products WHERE id =" + id, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  // get product by category  TO TEST
  async getProductByCategory(category) {
    return new Promise((resolve, reject) => {
      this.con.query("SELECT * from products WHERE Category =" + category, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

// delete product by id  TO TEST
  async deleteProduct(id) {
    return new Promise((resolve, reject) => {
      this.con.query("DELETE * from products WHERE id =" + id, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }








  // add product
//   async addProduct(product){
//     return new Promise((resolve, reject) => {
//       this.con.query(`INSERT INTO products (Title, Description, Price, Price_old, IMG_SRC, IMG_alt, Category)
//                       VALUES ('${product.Title}','${product.Description}','${product.Price}','${product.Price_old}','${product.IMG_SRC}','${product.IMG_alt}','${product.Category}')`, (err, result)=> {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(result);
//         }
//       });
//     });
// }


// Orders: THe New Order
//   async addOrder(product){
//     return new Promise((resolve, reject) => {
//       this.con.query(`INSERT INTO orders (id, userID, productID, Quantity)
//                       VALUES ('${users.id}','${product.id}', 1)`, (err, result)=> {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(result);
//         }
//       });
//     });
//   }



}

const db = new Database();

exports.Database = db;
