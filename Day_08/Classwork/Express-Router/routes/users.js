//1. import express
const express = require('express');

//2. create router
const router = express.Router();

//4. Adding router==================
// 1. get all users
router.get("/", (req, res)=>{
    console.log(`Method : ${req.method}`);
    res.send("Get All Users");
})
//2. user profile
router.get("/profile", (req, res)=>{
    console.log(`Method : ${req.method}`);
    res.send("Users Profile");
})

//3. User signup
router.post("/signup", (req, res)=>{
    console.log(`Method : ${req.method}`);
    res.send("Users successfully Signup");
})

//4. User signup
router.post("/signin", (req, res)=>{
    console.log(`Method : ${req.method}`);
    res.send("Users successfully Signin");
})

//5. User update
router.put("/", (req, res)=>{
    console.log(`Method : ${req.method}`);
    res.send("Users updated successfully");
})

//6. delete user
router.delete("/", (req, res)=>{
    console.log(`Method : ${req.method}`);
    res.send("Users delete successfully");
})


//3. Export router
module.exports = router;