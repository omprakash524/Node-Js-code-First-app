const os = require('os');

console.log("os arch : "+os.arch());
const freeMemory = os.freemem();
console.log(`Free memory: ${freeMemory/1024/1024/1024}`); // Outputs something like 81
// 1 byte = 8 bit
// 1 kilobyte  (kb) = 1024 bytes (B)    
// 1 megabyte  (MB) = 1024 kb   =  1024 * 1024 B  = 1048576 Bytes
// 1 gigabyte  (GB) = 1024 MB   =  1024 * 1024 * 1024 B =  1073741824 Bytes 
// 1  terabyte  (TB) = 1024 GB   = 1024 * 1024 * 1024 * 1024 B    = 1099511627776 Bytes

console.log("homedir : "+os.homedir());
// Returns the home directory of the current user

console.log("Host name : "+os.hostname());
// Returns the hostname

const totalMem = os.totalmem();
console.log(`Total memory: ${totalMem} Bytes`);

console.log("Number of CPU cores: " + os.cpus().length);

console.log(`Total memory: ${totalMem} Bytes`);  
const usedMem = totalMem - freeMemory;       
console.log(`Used memory: ${usedMem} Bytes`);
console.log("Total mem : "+totalMem/1024/1024/1024);
       
console.log("Platform : "+os.platform());
console.log("Os type : "+ os.type());