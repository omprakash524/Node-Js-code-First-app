// Synchronous version 
// create -> writeFileSync()
// read -> readFileSync(), fs.read()
// update/rename -> renameSync(), appendFileSync()
// delete -> unlinkSync()

// Asynchronous version for all above methods
// create -> writeFile(), readFile()
// read -> fstat()
// update/rename -> rename(), appendFile()
// delete -> unlink()
// let me tell you what is crud operation in node js
// Create - When we add something into our database like inserting record in table
// Read - When we retrieve information from our database like fetching records from table
// Update - When we modify existing information in our database like updating records in table
// Delete - When we remove information from our database like deleting records from table

// To create a new folder using cmd in node js
const fs = require('fs');
// fs.mkdirSync("Om");

// fs.writeFileSync('Om/newfile.txt', "i am creating a new file");

// fs.appendFileSync('Om/newfile.txt',"\nAdding new content");

// const data1 = fs.readFileSync('Om/newfile.txt');
// console.log(data1);
// const data = fs.readFileSync('Om/newfile.txt', 'utf-8');
// console.log(data);

// fs.renameSync('Om/newfile.txt','Om/updatedfile.txt');


// to delete the file
// fs.writeFileSync('Om/Data.txt',"new data");
fs.unlinkSync("Om/Data.txt");


// to delete the folder
fs.rmdirSync('Om/updatedfile.txt');

