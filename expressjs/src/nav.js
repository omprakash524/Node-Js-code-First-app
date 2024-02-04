// routing in express   
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

app.use(express.static('public'));

// app.get("/home",(req,res)=>{
//     res.send("<h2>Welcome  to Home Page</h2>");
// });

const templatePath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname,"../templates/partials");

const staticPath =  path.join(__dirname,"../public");
// app.use(express.static(staticPath));

// To set the view engine 
app.set("view engine", "hbs");
app.set("views",templatePath);
hbs.registerPartials(partialsPath);
// template engine route
app.get("",(req,res)=>{
    res.render('index',{
        channeln: "om",
    });
});
app.get("/about",(req,res)=>{
    res.render('about');
});

app.get("*", (req,res)=>{
    res.render("404",{
        errorcomment: "Opps page couldn't be found",
    });
});



app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
});

const port = 8000;
app.listen(port,()=>{
    console.log("Listening to port : "+port);
});