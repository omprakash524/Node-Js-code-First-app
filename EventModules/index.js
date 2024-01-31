// what in events module in node js?


const EventEmitter = require("events");
const event = new EventEmitter();

event.on('SayMyName',()=>{
    console.log("Hello World!\nI am groot");
});

event.emit("SayMyName");

event.on("Show",()=>{ //listening  to the Show event 
    console.log("I will show you something");
});

event.on("Show",()=>{
    console.log("I will show you click image");
});

event.on("Show",(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
});
// multiple callbacks for one event 
event.emit('Show',100, "ok");
event.emit('Show',200, "ok2");
event.emit('Show',300, "ok3");