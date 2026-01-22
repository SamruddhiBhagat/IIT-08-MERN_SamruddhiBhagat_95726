//1. import express
const express = require('express');
const studentRouter = require('./routes/students')

//2. create app
const app = express();

// 4.Middleware
app.use(express.json())
app.use("/students",studentRouter)


//3. run the app
app.listen(`3000`,`localhost`,()=>{
    console.log(`server is running on port 3000`)
})