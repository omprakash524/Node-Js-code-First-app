const express  = require("express");
const router = new express.Router();
const Student = require("../models/students");

// 2. We need to define the router
// router.get("/om",(req,res)=>{
//     res.send("Hello routerr");
// });



// create a new students
// app.post("/students",(req,res)=>{
//     console.log(req.body);
//     const user = new Student(req.body);
//     // save returns a promises so we need to  use .then() and .catch() methods
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((err)=>
//     res.status(400).send(err));
// });

// using Async-Await
router.post("/students", async(req,res)=>{
    const user = new Student(req.body);
    try{
        const CreateUser = await user.save();
        res.status(201).send(CreateUser);
    }catch(err){
        res.send(400).send(err);
    }
});

// root folder
router.get("/",(req,res)=>{
    res.send("<h2>Hello from the server!!!!!! </h2>");
});




// read the data of registered students
router.get("/students", async(req,res)=>{
    try{
        const studentsData = await Student.find();
        res.send(studentsData);
    }catch(e){
        res.send(e);
    }
});

// get the individual student data using id
router.get("/students/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        // console.log(req.params);
        // res.send(req.params.id);
        //and we know it returns  a promise so we use .then() to access the value inside that promise
        // or we can use async /await like this:
        const studentData = await Student.findById(_id);
        if(!studentData){
            return res.status(404).send();
        }else{
            res.send(studentData);
        }
        res.send(studentData);
    }catch(e){
        res.status(500).send(e);
    }
});

router.get("students/:name", async(req,res)=>{
    try{
        const name = req.params.name;
        const studentName = await Student.find( { "fullName" : name} );
        if(!studentName){
            res.send( "No student with that name" );
        } else{
            res.send(studentName);
        }
        res.send(studentName);
    }catch(e){
        res.status(500).send("Error in retrieving the student by Name"+e);
    }
});

// update the students by it id
router.patch("/students/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id,req.body,{
            new :true //this means return the updated data not the old one
        });
        res.send(updateStudents);
    }catch(e){
        res.status(400).send(e);
    }
});
// update the student by its name
router.patch("/students/:phone", async(req,res)=>{
    try{
        const phone = req.params.phone;
        const updateStudentPhone = await Student.findOneAndUpdate(phone,req.body,{
            new: true 
        });
        res.send(updateStudentPhone);
    }catch(e){
        res.status(400).send(e);
    }
});

// delete the students by it id
router.delete("/students/:id",async (req ,res) =>{
    try{
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return  res.status(404).send("The student with the given ID was not found.");
        }else{
            res.send(deleteStudent);
        }
    }catch(e){
            res.status(500).send(e);
        }
    });
    


module.exports = router;