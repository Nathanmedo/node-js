//path
//os
//http
//FS


const os = require('os')
let userInfo = os.userInfo()

console.log(`User Info: ${userInfo.username} and directory: ${userInfo.homedir}`);
console.log(`System Uptime: ${os.uptime()}`);
console.log(`Total Memory: ${os.totalmem()}`);
// console.log(`CPUS: ${os.cpus()}`);
console.log(`Free Memory: ${os.freemem()}`);