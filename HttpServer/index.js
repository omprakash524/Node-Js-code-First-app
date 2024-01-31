const http = require("http");
const fs = require('fs');

const server = http.createServer((req,res)=>{
    // fs.readFile(`${__dirname}/UserApi/userapi.json`,"utf-8",(err,data)=>{
    //     console.log(data);

    const data = fs.readFileSync(`${__dirname}/UserApi/userapi.json`,"utf-8");
    const objData = JSON.parse(data);
    console.log(data);


    console.log("server is running...");
    if(req.url=="/"){
        res.end("Hello from the other sides");
    }else if(req.url == "/about"){
        res.end("Hello from the about sides");
    }else if(req.url == "/userapi"){
            // res.end(objData.name);
            res.writeHead(200,{"content-type":"application/json"});
            res.end(objData.name);
        
    }
    else if(req.url == "/contact"){
        res.end("Hello from the contact sides");
    }else{
        res.writeHead(404, {"content-type":"text/html"});
        res.end("<h1>404 error page</h1>");
    }
});

const port =  3000;
    server.listen(port,()=>{
        console.log(`The server is listening on ${port}`);
    });



/*
 * how this works?
 * when a request comes in it will call that function with two parameters req and res
 *   req stands for request which contains information about incoming request like headers , method etc
 *   res stands for response which allows us to send back data to client
 *   we just log something on the console and then end our response by sending some data "Hello From The
 *   Other Side" back to the client
 */
