const fs = require('fs');
const bioData = {
    name:"omprakash",
    age:25,
    gender:"male",
    bloodGroup:"B+ve"
}
function display() {
    console.log(`Name : ${bioData.name}`);
    console.log(`Age : ${bioData.age}`);
    console.log(`Gender : ${bioData.gender}`);
    console.log(`Blood Group : ${bioData.bloodGroup}`);
}
display();

function Show(){
    console.log(`My name : ${bioData.name}`);
    console.log(`My age is : ${bioData.age}`);
    console.log(`My gender is : ${bioData.gender}`);
    console.log(`My blood group : ${bioData.bloodGroup}`);
}
Show();

const jsonData = JSON.stringify(bioData);
console.log(jsonData);

const objData = JSON.parse(jsonData);
console.log(objData);

//Accessing the property of an object using dot notation 
console.log("Accessing properties using dot notation");
console.log(`${bioData.name}'s Age is ${bioData.age}`);

//Accessing the property of an object using bracket notation
console.log("\n Accessing properties using Bracket Notation")
console.log(`${bioData["name"]} 's Age is ${bioData["age"]}`);

// fs.writeFileSync('data.json',JSON.stringify(bioData));

fs.writeFile("json1.json",jsonData,(err)=>{
    console.log("done");
});

fs.readFile("json1.json","utf-8",(err,data)=>{
    console.log(data);
    const person = JSON.parse(data);
    console.log(`Person's Name is ${person.name}`);
    console.log(`Person 's Age  is ${person.age}`);
});