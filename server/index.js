const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const Database = require('./models/Database.js');

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get('/users',(req,res)=>{
    Database.Database.getAllUsers().then(users => {
        console.log(users);
        res.send(users);
    });
});

app.get('/user',(req,res)=>{
    Database.Database.getUserById(2).then(user => {
        console.log(user);
        res.send(user);
    });
});

// handles the All Products query
app.get("/products", (req, res) => {
    Database.Database.getAllProducts().then((products) => {
        console.log(products);
        res.send(products);
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

