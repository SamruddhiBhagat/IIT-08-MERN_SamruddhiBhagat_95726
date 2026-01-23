//1. importing 
const express = require('express');
const pool = require(`../db/pool`);
const result = require(`../utils/result`);
const cryptojs = require(`crypto-js`);
const jwt = require(`jsonwebtoken`);
const config = require(`../utils/config`);

//2. creating router
const router = express.Router();

//4. creating routes
//signup
router.post("/signup",(req,res) =>{
    const {name, email, password, mobile} = req.body;
    const sql = `Insert into users (name, email, password, mobile) values(?,?,?,?)`
    const hashedPassword = cryptojs.SHA256(password).toString();
    pool.query(sql, [name, email, hashedPassword, mobile], (error,data) =>{
        res.send(result.createResult(error,data))
    })
})

// Signin
router.post("/signin",(req,res) => {
    const {email, password} = req.body;
    const hashedPassword = cryptojs.SHA256(password).toString();
    const sql = `select * from users where email = ? and password = ?`
    pool.query(sql,[email,hashedPassword],(error,data)=>{
        if(error){
            res.send(result.createResult(error))
        } else if(data.length == 0){
            res.send(result.createResult("Invalid email or password"))
        } else {
/*==========================
            JWT
============================*/
            const user = data[0]; // whenever you are doing signin operation , your data is present on 'o' index
            
            
            //create token
            //1. payload
            const payload = {
                id : user.id,
                email : user.email   
            }

            //actual token generating
            const token = jwt.sign(payload,config.SECRET);
            //send the token to the user
            const userData = {
                name : user.name, //user.name or data[0].name
                mobile : user.mobile,
                token : token
            }
            res.send(result.createResult(null,userData))


        }
    })

})

// Query Parameters
router.get("/", (req,res) =>{
    const {email} = req.query;
    const sql = `select * from users where email = ?`;
    pool.query(sql,[email],(error,data)=>{
        res.send(result.createResult(error,data))
    })
})

//3. exporting router
module.exports = router;