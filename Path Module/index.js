// what is path module in node js
// the path module provides utilities for working with file and directory paths. It can be accessed using
// require('path') or require('path/native'). The native version of Path provides more methods
// but will not work correctly if executed within a web page.
const path = require('path');
const fs = require('fs');

console.log(path.dirname('E:/Engineer/Skills required'));
// Prints: E:\Engineer\Skills required

console.log(path.basename('/foo/bar/baz.js', '.js'));
// prints: bar/baz

console.log(path.extname('index.html'));
// prints: .html

console.log(path.join(__dirname, 'secret-folder'));
// prints: D:\NodeJS_Projects\03-FileSystem\12-PathModule\secret-folder

const mypath = (path.parse('E:/Engineer/Skills required'));
console.log(mypath.name);
// prints : Skills required