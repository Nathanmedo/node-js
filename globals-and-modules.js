//Window Object is not a global in node because there is no browser.

//Globals 
//__dirname - returns the path of the current directory
//__filename - returns the filename
//module - this is used to export variables
//require - this is used to access a variable in another node file
//process - this is used to process the info about the environment of the program


let namesObj = require('./module-testing')
let { sayGoodbye } = require('./module-testing-2');

console.log(namesObj);

sayGoodbye(namesObj.john)


