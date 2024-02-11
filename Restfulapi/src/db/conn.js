const mongoose = require("mongoose");

// basically this connect method returns the promises so we need to deal with by using catch method
mongoose.connect("mongodb://localhost:27017/students-api").then(()=>{
    console.log("connected to MongoDB server successfully!");
}).catch((e)=>{
    console.log(`No connection due to ${e}`);
});

