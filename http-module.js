const http = require('http');
const { url } = require('inspector');

const server = http.createServer(
    (serverRequest, serverResponse)=>{
        serverResponse.statusCode = 200;
        console.log(serverRequest);
        if(serverRequest.url == '/'){
            serverResponse.end('Welcome to the Home page, and server of a company');
        }else
        if(serverRequest.url == '/about'){
            serverResponse.end('This is the about');
            
        }else{
            serverResponse.end(`
            <head>Server Error</head>
            <h1> Error 404 </h1>
            <p> This could be as a result of a wrong url link </p>
            `)
        }
        
    }
)
server.listen(3000)


