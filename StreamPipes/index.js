/*
const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on("request",(req,res)=>{
    const rstream = fs.createReadStream("1Notes.txt");
    rstream.on("data",(chunkdata)=>{
        res.write(chunkdata);
    });
    rstream.on("end",()=>{
        res.end('\nData received');
    });
    rstream.on("error",(err)=>{
        console.log(`Error: ${err}`);
        res.end("File not found");
    })
});

const port = 9000;
server.listen(port);
console.log(`Listening on ${port}`);
*/
// you only ask right question when you know the concept

// const fs = require('fs');
// const http = require('http');

// const server = http.createServer();

// server.on("request",(req,res)=>{
//     const rstream = fs.createReadStream("Notes.txt");
//     rstream.pipe(res);
// });

// const port = 8000;
// server.listen(port,"127.0.0.1",()=>{
//     console.log("Server is running on  " + port);
// });

const fs = require("fs");
const http = require('http');
const server = http.createServer();

server.on("request",(req,res)=>{
    const rstream = fs.createReadStream("Notes.txt");
    rstream.pipe(res);
});

const port = 9000;
server.listen(port,()=>{
    console.log("Listening to this port "+port);
});