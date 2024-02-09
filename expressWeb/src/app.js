const express = require('express');
const app = express();
const path = require('path');
const hbs = require("hbs");
const port = process.env.PORT || 8000;


// public static path
const static_path = path.join(__dirname,"../public");
// const template_path = path.join(__dirname,"../templates");
// const partials_path = path.join(__dirname,"../views");



// app.set("views", path.join(__dirname, "views"));
// set handlebar template engine
// app.set("view engine", "hbs");
// app.set('views', template_path);
// hbs.registerPartials(partials_path);

app.use(express.static(static_path));
// app.use(express.static(partials_path));




// app.get(route, callback)
app.get("",(req,res)=>{
    res.render("index"); // no need to use .hbs
});

// About page
app.get("/about",(req,res)=>{
    // now instead of send we use render bcz we used template engine handlebar
    res.render("about");
});

// weather page
app.get("/weather",(req,res)=>{
    res.render("weather");
});

// // Login  Page
// app.get("/login",(req,res)=>{
//     res.render("Welcome to the login page");
// });

// Blog  Posts
app.get("/blog",(req, res)=>{
    res.render("Welcome to the blog page");
});


// error page
app.get("*",(req,res)=>{
    res.render('404err',{
        errorMsg: 'Opps! Page Not Found'
    });
});






// server running on
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});
