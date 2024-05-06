const path = require('path');

console.log(path.sep);

let filePath = path.join(__dirname, '/content', '/subfolder', 'file.txt');
console.log(filePath);
console.log(path.basename(filePath));
