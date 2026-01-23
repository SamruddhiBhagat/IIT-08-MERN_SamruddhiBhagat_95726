//1. imprting
const mysql = require(`mysql2`)

const pool = mysql.createPool({
    host: `localhost`,
    user: `root`,
    password: `Macbook#567`,
    database: `internship_db`
})

//2. exporting
module.exports = pool;