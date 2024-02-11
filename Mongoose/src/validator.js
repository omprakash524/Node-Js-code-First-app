const mongoose = require("mongoose");
const validator = require("validator");

// connection node to mongodb
mongoose.connect("mongodb://localhost:27017/SortCount").then(()=>{
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
    Branch: String,
    Ctype: String,
    Author: String,
    Language: String,
    EmailId: {
        type: String,
        required: true,
        unique: true,
        validate(value){
            if(validator.isEmail(value)){
                return value;
            }else{
                throw new Error("Invalid email id");
            }
        }
    }
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
            Active:true,
            Author: "A1"
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
            Active:true,
            Author: "A1"
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
            Active:true,
            Author: "A1"
        });

        const doc4 = new Data({
            Name:"Doc4",
            Age: 42,
            Gender: "Male",
            BloodGroup:  "A+ve",
            Address: "Folder",
            ContactNo:  9392444029,
            EmailId: "doc524@gmail.com",
            Branch: "Computer Science Engineering",
            Active:true,
            Author: "A1"
        });

        const doc5 = new Data({
            Name: "Nodejs",
            Ctype: "Back End",
            Author: "A1",
            Active:true,
            EmailId: "Node32@gmail.com"
        });

        const doc6 = new Data({
            Name: "JavaScript",
            Ctype: "Front End",
            Author: "A2",
            Active:true,
            EmailId: "js234@gmail.com"
        });

        const result = await Data.insertMany([doc1, doc2, doc3, doc4, doc5, doc6]);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

// calling function
createDocument();

// read  data from database
const getDocument = async()=>{  
    try{
        // const result = await  Data.find({$or:[{Author: "A1"},{Author:"A2"}]}).select({Name:1}).countDocuments();
        const result = await  Data
        .find({Author: "A1"})
        .select({Name:1})
        .sort({Name:1});
        // .countDocuments();
        console.log("Data From Database : "+ (JSON.stringify(result, null, 2)));
    }catch(err){
        console.log(err);
    }
}

/// calling function
// getDocument();


// update document for now we use id but in real world we will fetch with api
const updateDocument = async(_id)=>{
    try{
        let result = await Data.findByIdAndUpdate({_id}, { // instead of updateOne we use findByIdAndUpdate
            $set:{Active:false},
            $set:{Address:"Prakasam Dst"}
        });
        console.log(`${result} Documents were updated`);
    }catch(error){
        console.log(error);
    }
}

// updateDocument("65c7051f4658bf5603450575");

// delete a document using its ID
const deleteDocument = async(_id)=>{
    try{
        const result = await Data.findByIdAndDelete({_id}); // it print which id we deleted so we use instead of deleteOne 
        if(!result) throw new Error('No User Found');
        console.log(`User Deleted Successfully ${result}`);
    }catch(error){
        console.log(error);
    }
}

// deleteDocument("65c7051f4658bf5603450579");


/**
 * In this series we will learn how to create a own restful API with the help of
 * MongoDB, Mongoose, Nodejs, ExpressJs
 * REST API - "REpresentational State Transfer" Application Programming Interface
 * It is a software that allows two applications to communicate with each other over the internet and through various devices. Every time you access an app like Facebook or check the weather on your smartphone, an API is used.
A RESTful API is an architectural style for an application program interface (API) that uses HTTP requests to access and use data. REST is not a programming language.
Building restful api
Restful api for students registration
we will do all by using the advance javascript concept 
like callback hell, promises and async /await

1. Create a student model (schema)
2. Implement GET method to get all students data
3. Implement POST method to add a new student
4. Implement PUT/UPDATE method to update an existing student's information
5. Implement DELETE method to remove a student from database





 */
// 
