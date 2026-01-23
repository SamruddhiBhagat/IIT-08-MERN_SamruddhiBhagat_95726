//1. importing
const express = require('express');
const userRouter = require(`./routes/user`)
const auth =  require(`./utils/auth`)

//2. creating express app
const app = express();

//4. middleware
app.use(express.json());
app.use(auth.authUser)
app.use(`/users`,userRouter)

//3. exporting app
app.listen("3000","localhost",()=>{
    console.log("server is running on port 3000");
})