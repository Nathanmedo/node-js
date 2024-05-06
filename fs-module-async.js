const { readFile, writeFile } = require('fs');

console.log('start work');
readFile(
    './content/first.txt',
    'utf-8',
    (err, result) =>{
        if(err){
            console.log(err.message);
        }
        const first =  result
        readFile(
            './content/second.txt',
            'utf-8',
            (err, result) =>{
                if(err){
                    console.log(err.message);
                }else{
                    const second = result
                    writeFile(
                        './content/createFile.txt',
                        `This is the content of the createFile, holding the ${first}, and the ${second}`,
                        (err, result)=> {
                            if (err){
                                console.log(err);
                            }
                            console.log('done with task');
                        }
                    )
                }
            }
        )
    }
)

console.log('starting the next task');

