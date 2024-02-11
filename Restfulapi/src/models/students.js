const mongoose = require("mongoose");
const validator = require("validator");

// creating schema
const StudentSchema = new mongoose.Schema({
    name: {
        type: String,  
        required: [true, "Please provide your name"], 
        validate: [validator.isLength(3), 'Name should be at least 3 characters']
    },
    email:{
        type:String,
        unique: true,
        lowercase : true,
        required:[true,"Please provide an Email"] ,
        validate: [validator.isEmail,'Please provide a Valid Email'.toLowerCase()],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('You must enter a valid email')
            }
        }
    },
    age: {
        type: Number,
        required: [true, "Age is required"],
        validate: {
            min: [18, "You must be at least 18 years old."],
        }
    },
    gender: {
        type: String,
        enum: ["Male", "Female","Other"],
        default: "Not-specified"
    },
    address: {
        street: String,
        city: String,
        state: String,
        zipCode: {
            type: String,
            match: [/^\d{6}$/, 'ZIP code must be a  6 digit number']
        }
    },
});

// create a model
// we will create a new collection
const Student = new mongoose.model( "Student", studentSchema );

module.exports= Student;