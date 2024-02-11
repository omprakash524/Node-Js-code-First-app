const express = require("express");
const app = express();
const Student = require("./models/Student");

const port = process.env.PORT || 3000;
require("./db/conn"); // Database connection

// root folder
app.get("/",(req,res)=>{
    res.send("<h2>Hello from the server!!!!!! </h2>");
});

app.post("/students",(req,res)=>{
    res.send("Hello from the  server!");
});


app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});