//1. import express
const expree = require('express');

//2. create app
const app = express();




//3. run the app
app.listen(`3000`,`localhost`,()=>{
    console.log(`server is running on port 3000`)
})