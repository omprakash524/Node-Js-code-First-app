const mongoose = require("mongoose");
const validator = require("validator");

// creating schema
const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength:3,  // at least three characters long
        validate(value) {
            if (!validator.isLength(value,{min:3})) {
                throw new Error('Name must be more than 3 chars');
            }
        }
    },
    email: {
        type: String,
        unique: [true, "Email id already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email Id')
            }
        },
        lowercase: true,
        required: [true, "Please provide an Email"],
        validate: [validator.isEmail, 'Please provide a valid Email']
    },
    phone:{
        type: Number,
        min:10,
        required: true,
        unique: true
    },
    
    age: {
        type: Number,
        required: [true, "Age is required"],
        validate: {
            validator: (value) => Number.isInteger(value),
            message: 'Age must be an integer'
        }
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        default: "Not-specified"
    },
    address: {
        street: String,
        city: String,
        state: String,
        zipCode: {
            type: String,
            match: [/^\d{6}$/, 'ZIP code must be a 6 digit number']
        }
    },
});

// create a model
// we will create a new collection with model
const Student = new mongoose.model("Student", StudentSchema);

module.exports = Student;