// routing in express   
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

// app.get("/home",(req,res)=>{
//     res.send("<h2>Welcome  to Home Page</h2>");
// });
const staticPath =  path.join(__dirname,"../public");
app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
});

const port = 8000;
app.listen(port,()=>{
    console.log("Listening to port : "+port);
});