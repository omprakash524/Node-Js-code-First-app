const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    const rstream = fs.createReadStream("input.txt");
    
    rstream.on('data', (chunkdata) => {
        res.write(chunkdata);
        // console.log(`received data of length ${chunkdata.length}`);
    });

    rstream.on("end", () => {
        res.end('\nData Received');
    });
});

const port = 8000;
server.listen(port, "127.0.0.1");

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