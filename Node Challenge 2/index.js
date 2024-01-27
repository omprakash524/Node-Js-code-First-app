const fs = require('fs');
// const path = require('path');

// fs.mkdir('Om',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("Folder created");
// });

// To write a file
// fs.writeFile('Om/mydata.txt',"My name is omprakash",(err)=>{
//     console.log("File created");
// });

// To append the data
// fs.appendFile("Om/mydata.txt",'\nAppending the new data',(err)=>{
//     console.log("Data appended");
// });



// To read the file without getting th buffer data
// fs.readFile('Om/mydata.txt', "utf-8", (err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });


// // To rename the file
// fs.rename('Om/mydata.txt','Om/newfile.txt',(err) => {   //Rename the file
//     if(err) throw err; 
//     console.log('The file has been renamed!');
// });

// // To delete the file
// fs.unlink('Om/newfile.txt', function (err) {    //
//     if (err) throw err;
//     console.log('File deleted!');
// });
// // or
// fs.unlink('Om/file.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File deleted");
//     }
// });

// To delete the folder
fs.rmdir('Om', function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log("Directory removed!");
    }
});
