// 1. importing
const express = require('express');
const userRouter = require(`./routes/users`);


// 2. create app
const app =express();


//4. middleware
app.use(express.json());
app.use(`/users`, userRouter)


//3. export
app.listen(`3000`, `localhost`,()=>{
    console.log(`server is running on port 3000`);
})