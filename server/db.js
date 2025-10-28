const Pool = require("pg").Pool
const pool = new Pool({
    user: "postgres",
    password: "lacazette10!",
    host: "localhost",
    port: 5432,
    database: "concert"
})

module.exports = pool