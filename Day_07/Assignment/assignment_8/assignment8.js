//Create server by importing http module

//1.Import http module
const http = require(`node:http`);


//2.create server
const server = http.createServer((req,res)=>{
    if(req.method == `GET`){
        console.log('GET request received');
        res.end('GET request handled');
    }
    else if(req.method == `POST`){
        console.log('POST request received');
        res.end('POST request handled');
    }
    else if(req.method == `PUT`){
        console.log('PUT request received');
        res.end('PUT request handled');
    }
    else if(req.method == `DELETE`){
        console.log('DELETE request received');
        res.end('DELETE request handled');
    }
      res.end(`Hello from server`);
})


//3.start server
server.listen(3000,`0.0.0.0`, () =>{
    console.log(`server started on port no 3000`);
})
