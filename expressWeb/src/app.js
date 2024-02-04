const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


// app.get(route, callback)
app.get("",(req,res)=>{
    res.send("Welcome to om page");
});

// About page
app.get("/about",(req,res)=>{
    res.send("Welcome to about page");
});

// weather page
app.get("/weather",(req,res)=>{
    res.send("Welcome to weather page");
});

// Login  Page
app.get("/login",(req,res)=>{
    res.send("Welcome to the login page");
});

// Blog  Posts
app.get("/blog",(req, res)=>{
    res.send("Welcome to the blog page");
});


// error page
app.get("*",(req,res)=>{
    res.send("This is 404 error page");
});






// server running on
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});
