const fs = require("fs");
// creating a new file
// fs.writeFileSync('read.txt', 'I am groot, Jai siya ram');

// fs.appendFileSync('read.txt',"How are you , i am good");


const buffer_data = fs.readFileSync('read.txt');
console.log(buffer_data);
original_data = buffer_data.toString();
console.log(original_data);

// to rename the file
// at first we write the file name and the name which want to update

fs.renameSync('read.txt', 'readWrite.txt');
// reading the updated file
updated_file_content = fs.readFileSync('readWrite.txt');
console.log(updated_file_content);
// check if file exists or not
if (fs.existsSync('readWrite.txt')) {
    console.log("The file is present in directory ");
    } else {
        console.log("The file is not present in directory ");
 }
let dataToAppend='This is some more data adding in the file';
// append data to the end of the file
fs.appendFileSync('readWrite.txt', '\n' + dataToAppend);


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
// Delete - When we remove information from our database like deleting records from table</s>

