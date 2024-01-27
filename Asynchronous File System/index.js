const fs = require('fs');

// fs.writeFile('read.txt','today is awesome day',(err)=>{
//     console.log("data written");
//     console.log(err);
// });
// what is callback
/*
A callback function in Node.js is a function that is passed as an argument to another function and
executed or called back at some point in the future when the operation being waited on is completed.
*/

// fs.appendFile('read.txt', "\nAdding new sentence in read file", (err)=>{
//     if (!err) {
//         console.log("Data appended to file");
//     } else {
//         console.log("Error in Appending data",err);
//     }
// });
// fs.appendFile('read.txt',"\nI am adding using the conditional statement", (err)=>{
//     if(!err){
//         console.log("Data is appended in the file");
//     }else{
//         console.log("Data is not appended in the file", err);
//     }
// });

// to read the file asynchronous
// fs.readFile('read.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     //console log will print after the execution of all lines of code
//     console.log(`${data}`);
//     // process the data here
// });

// fs.readFile('read.txt','utf-8', (err,data)=>{
//     if(err) throw err;
//     else
//     console.log("The content of the file is : "+data.toString());
// });

// const data = fs.readFileSync('read.txt', 'utf-8');
// console.log(data);
// console.log("After the data");


const data = fs.readFile('read.txt', "utf-8", (err,data)=>{
    console.log(data);
});
console.log("After the data");