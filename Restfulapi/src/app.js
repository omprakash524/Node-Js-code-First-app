const express = require("express");
const app = express();
const Student = require("./models/students");

const port = process.env.PORT || 3000;
app.use(express.json()); // Middleware  for parsing JSON bodies 
require("./db/conn"); // Database connection

// create a new students
app.post("/students",(req,res)=>{
    console.log(req.body);
    const user = new Student(req.body);
    // save returns a promises so we need to  use .then() and .catch() methods
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((err)=>
    res.status(400).send(err));
});

// root folder
app.get("/",(req,res)=>{
    res.send("<h2>Hello from the server!!!!!! </h2>");
});



app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});