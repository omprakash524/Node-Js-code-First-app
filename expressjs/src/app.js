const express = require("express");

const app = express();

// app.get(route,callback)
app.get("/",(req, res)=>{
    res.send("Hello world from the express \nI am groot");
    
});

app.get("/about",(req,res)=>{
    res.send("Hello i am from about page");
});

app.get("/Home",(req,res)=>{
    res.send("Hello i am home page");
});

app.get("/contact",(req,res)=>{
    res.send("Hello i am  contact us page");
});

const port = 8000;
app.listen(port,()=>{
    console.log("Listening to port : "+port);
});