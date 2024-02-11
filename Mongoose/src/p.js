const mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/P").then(()=>{
    console.log("MongoDB connected successfully done...");
}).catch((err)=>{
    console.log(err);
});

// schema
const DataSchema = new Schema({
    Name: { type: String, required: true },
})