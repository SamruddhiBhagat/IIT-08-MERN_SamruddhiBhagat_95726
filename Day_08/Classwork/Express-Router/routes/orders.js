//1. import express
const express = require('express');

//2. create router
const router = express.Router();

//4. Adding router==================


//1. get orders
router.get("/", (req, res)=>{
    console.log(`Method : ${req.method}`);
    res.send("All orders");
})
//2. add orders
router.post("/", (req, res)=>{
    console.log(`Method : ${req.method}`);
    res.send("orders Added");
})
//3. update orders
router.put("/", (req, res)=>{
    console.log(`Method : ${req.method}`);
    res.send("orders updated successfully");
})
//4. delete orders
router.delete("/", (req, res)=>{
    console.log(`Method : ${req.method}`);
    res.send("orders delete successfully");
})



//3. Export router
module.exports = router;