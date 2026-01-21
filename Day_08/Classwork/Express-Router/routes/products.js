//1. import express
const express = require('express');

//2. create router
const router = express.Router();

//4. Adding router==================

//1. get product
router.get("/", (req, res)=>{
    console.log(`Method : ${req.method}`);
    res.send("All Products");
})
//2. add product
router.post("/", (req, res)=>{
    console.log(`Method : ${req.method}`);
    res.send("Product Added");
})
//3. update product
router.put("/", (req, res)=>{
    console.log(`Method : ${req.method}`);
    res.send("Products updated successfully");
})
//4. delete product
router.delete("/", (req, res)=>{
    console.log(`Method : ${req.method}`);
    res.send("Products delete successfully");
})




//3. Export router
module.exports = router;