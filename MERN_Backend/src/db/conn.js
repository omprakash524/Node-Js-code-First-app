const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Registration").then(()=>{
    console.log( "Connected to MongoDB Successfully");
}).catch((e)=>{
    console.log( `No connection${e}`);
});
