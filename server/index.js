const express = require("express");
const app = express();
const cors = require("cors");
const pool = require('./db')

pool.connect()

//middleware
app.use(cors());  
app.use(express.json())

//routes

//create a todo

app.post('/todos' , async(req,res) => {
    try {
        console.log(req.body);
    } catch (error) {
        console.log(error.message);
    }
})

//get all todos 

//get a todo

//update a todo

//delete a todo

app.listen(5000, () => {
  console.log("listening on 5000");
});
