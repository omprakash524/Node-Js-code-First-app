const mongoose = require("mongoose");

// connection node to mongodb
mongoose.connect("mongodb://localhost:27017/DataD").then(()=>{
    console.log("MongoDB connected  successfully...");
}).catch((error)=>{
    console.log(error);
});

// schema
const dataSchema = new mongoose.Schema({
    Name: {type:String, required:true},
    Age: Number,
    Gender: String,
    BloodGroup: String,
    Address: String,
    ContactNo: Number,
    EmailId: String,
    Active: Boolean,
    Date: {type:Date,default:Date.now},
    Branch: String
});

// model
const Data = new mongoose.model("Data",dataSchema);

// Add data
const createDocument = async()=>{
    try{
        const doc1 = new Data({
            Name:"Om Prakash",
            Age: 22,
            Gender: "Male",
            BloodGroup:  "A+ve",
            Address: "Prakasam",
            ContactNo:  9392744029,
            EmailId: "omprakash524@gmail.com",
            Branch: "Computer Science Engineering",
            Active:true
        });

        // const  result= await doc1.save();
        // console.log(result);
        const doc2 = new Data({
            Name:"Mahesh Babu",
            Age: 32,
            Gender: "Male",
            BloodGroup:  "A+ve",
            Address: "Prakasam",
            ContactNo:  9322744029,
            EmailId: "mahesh524@gmail.com",
            Branch: "Computer Science Engineering",
            Active:true
        });

        const doc3 = new Data({
            Name:"Ajay",
            Age: 42,
            Gender: "Male",
            BloodGroup:  "A+ve",
            Address: "Delhi",
            ContactNo:  9392444029,
            EmailId: "ajay524@gmail.com",
            Branch: "Computer Science Engineering",
            Active:true
        });

        const result = await Data.insertMany([doc1, doc2, doc3]);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

// calling function
// createDocument();

// read  data from database
const getDocument = async()=>{  
    try{
        // const result = await  Data.find({$or:  [{Age : 22}, {Name : 'Mahesh Babu'}]});
        // const result = await  Data.find({$and:  [{Age : 22}, {Name : 'Mahesh Babu'}]});
        // const result = await  Data.find({$not:  [{Age : 32}, {Name : 'Mahesh'}]});
        const result = await  Data.find({$nor:  [{Age : 32}, {Name : 'Mahesh'}]});
        console.log("Data From Database : "+ (result));
    }catch(err){
        console.log(err);
    }
}

/// calling function
getDocument();