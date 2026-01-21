// 1. First Import express
const express = require('express');
const usersRouer = require(`./routes/users`)
const productRouer = require(`./routes/products`)
const orderRouetr = require(`./routes/orders`)

// 2. Create express app
const app = express();

// 4.Middlware
app.use("/users",usersRouer)
app.use("/products",productRouer)
app.use("/orders",orderRouetr)

// 3. Run Express app
app.listen("3000","localhost",()=>{
    console.log("Server is running on port 3000");
})