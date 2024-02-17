const express = require("express");
const { Server: WebSocketServer } = require("ws"); 

const app = express();
const port = 8080;

const server = app.listen(port, () => console.log(`Listening on ${port}`));

// WebSockets
const  wss = new WebSocketServer({server});
wss.on("connection",(ws)=>{
    ws.on( 'message', ( data )=>{
        console.log("Data from client %s: ",data);
        ws.send("Thanks buddy");
});
    // Close connection when client closes it
    ws.on('close',()=>console.log("Closed"));
});
