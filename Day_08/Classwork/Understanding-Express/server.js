// 1. First Import express
const express = require('express');

// 2. Create express app
const app = express();

//Routes
/*
1. users
2. products
3. orders
*/
// Users
//======================
// 1. get all users
app.get("/users", (req, res)=>{
    console.log(`Method : ${req.method}`);
    res.send("Get All Users");
})
//2. user profile
app.get("/users/profile", (req, res)=>{
    console.log(`Method : ${req.method}`);
    res.send("Users Profile");
})

//3. User signup
app.post("/users/signup", (req, res)=>{
    console.log(`Method : ${req.method}`);
    res.send("Users successfully Signup");
})

//4. User signup
app.post("/users/signin", (req, res)=>{
    console.log(`Method : ${req.method}`);
    res.send("Users successfully Signin");
})

//5. User update
app.put("/users", (req, res)=>{
    console.log(`Method : ${req.method}`);
    res.send("Users updated successfully");
})

//6. delete user
app.delete("/users", (req, res)=>{
    console.log(`Method : ${req.method}`);
    res.send("Users delete successfully");
})

// product
//======================

//1. get product
app.get("/products", (req, res)=>{
    console.log(`Method : ${req.method}`);
    res.send("All Products");
})
//2. add product
app.post("/products", (req, res)=>{
    console.log(`Method : ${req.method}`);
    res.send("Product Added");
})
//3. update product
app.put("/products", (req, res)=>{
    console.log(`Method : ${req.method}`);
    res.send("Products updated successfully");
})
//4. delete product
app.delete("/Products", (req, res)=>{
    console.log(`Method : ${req.method}`);
    res.send("Products delete successfully");
})

// orders
//======================

//1. get orders
app.get("/orders", (req, res)=>{
    console.log(`Method : ${req.method}`);
    res.send("All orders");
})
//2. add orders
app.post("/orders", (req, res)=>{
    console.log(`Method : ${req.method}`);
    res.send("orders Added");
})
//3. update orders
app.put("/orders", (req, res)=>{
    console.log(`Method : ${req.method}`);
    res.send("orders updated successfully");
})
//4. delete orders
app.delete("/orders", (req, res)=>{
    console.log(`Method : ${req.method}`);
    res.send("orders delete successfully");
})



// 3. Run Express app
app.listen("3000","localhost",()=>{
    console.log("Server is running on port 3000");
})