const express = require("express");
const app = express();
const Student = require("./models/students");
const studentRouter = require("./routers/student");
require("./db/conn"); // Database connection

const port = process.env.PORT || 3000;
app.use(express.json()); // Middleware  for parsing JSON bodies 
// 3. we need to register our router
app.use(studentRouter);


app.listen(port, ()=>{
   console.log(`Server is running on ${port}`);
});