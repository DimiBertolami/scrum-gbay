const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const Database = require('./models/Database.js');

console.log(Database);
app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get('/users',(req,res)=>{
    res.send(Database.getAllUsers())
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});