// routing in express   
const express = require('express');
const app = express();


app.get("/",(req,res)=>{
    res.send("<h2>Welcome  to Home Page</h2>");
});

app.use(express.static('public'));
app.get("/Home",(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
});

const port = 8000;
app.listen(port,()=>{
    console.log("Listening to port : "+port);
});