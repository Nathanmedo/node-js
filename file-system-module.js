const fs = require('fs');

// synchronous method that handles tasks one orderly(line by line)
console.log('start work');
let fileDetails = fs.readFileSync(
    './content/first.txt',
    'utf-8'
)
fs.writeFileSync(
    './content/third.txt',
    'This is the third file detail',
    {flag: 'a'},
    console.log('done with task')
)
console.log('starting new task');