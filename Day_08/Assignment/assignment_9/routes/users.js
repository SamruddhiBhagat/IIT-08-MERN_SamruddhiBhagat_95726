//1. importing
const express = require('express');
const pool = require(`../db/pool`)
const results = require(`../utils/results`);

//2. create router
const router = express.Router();

//4. adding routes for users
    // i.  get all users

    router.get(`/`,(req,res)=>{
        const sql = `select * from users`;
        pool.query(sql,(error,data)=>{
            res.send(results.createResult(error,data))
        })
    })

    // ii. add users
    router.post(`/`,(req,res)=>{
        const {first_name,last_name, email, phone} = req.body;
        const sql = `insert into users (first_name,last_name, email, phone) values (?,?,?,?)`;
        pool.query(sql,[first_name,last_name, email, phone],(error,data)=>{
            res.send(results.createResult(error,data))
        })
        
    })




//3. Exporting
module.exports = router;