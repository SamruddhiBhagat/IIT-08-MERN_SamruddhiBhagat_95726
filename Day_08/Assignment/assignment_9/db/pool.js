//1. importing
const mysql2 = require('mysql2');

const pool = mysql2.createPool({
    host : "localhost",
    user : "root",
    password : "Macbook#567",
    database : "express_db"
})

module.exports = pool;