const express = require("express");

const PORT = process.env.PORT || 3050;

const app = express();

const Database = require("./models/Database.js");

// routing; cors exception/work-around
app.all("/*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, Content-Length, X-Requested-With"
    );
    next();
});

app.get("/", (req, res) => {
    res.json({message: "Hello from server!"});
});

// triggers getAllUsers() from 'Database' model
app.get("/api/users", async (req, res) => {
    try{
        const result = await Database.Database.getAllUsers()
        res.status(200).send(result)
    }catch (error){
        res.status(500).send(error)
    }
        //console.log(result);

});

// triggers getUserById() from 'Database' model
app.get("/api/user/id/:id", async (req, res) => {
    try{
        const id = req.params.id;
        const result = await Database.Database.getUserById(id)
        res.status(200).send(result)
    }catch (error){
        res.status(500).send(error)
    }
});

// handles  getAllProducts query
app.get("/api/products", async (req, res) => {
    try{
        const result = await Database.Database.getAllProducts();
        res.status(200).send(result)
    }catch (error){
        res.status(500).send(error)
    }
});

//app.get('/api/y/allproducts', async (request, response) => {
//    const result = await Database.Database.yGetAllProducts();
//    result ? response.status(200).send(result) : response.status(500).send('Internal Server Error')
//})

// triggers getProductById() from 'Database' model

app.get("/api/product/id/:id", async (req, res) => {
   try{
       const id = req.params.id;
       const result = await Database.Database.getProductById(id);
       res.status(200).send(result)
   }catch (error){
       res.status(500).send(error)
   }
});

// triggers getProductByCategory() from 'Database' model  TO TEST

app.get("/api/product/category/:category", async (req, res) => {
   try{
       const id = req.params.category;
       const result = await Database.Database.getProductByCategory(id);
       res.status(200).send(result)
   }catch (error){
       res.status(500).send(error)
   }
});

// triggers deleteProduct() from 'Database' model  TO TEST

app.delete("/api/product/id/:id", async (req, res) => {
    try{
        const id = req.params.id;
        const result = await Database.Database.deleteProduct(id);
        res.status(200).send(result)
    }catch (error){
        res.status(500).send(error)
    }
});




// triggers addProduct() from 'Database' model
// app.post("/product", (req, res) => {
//     Database.Database.addProduct(1).then((products) => {
//         console.log(products);
//         res.send(products);
//     });
// });


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
