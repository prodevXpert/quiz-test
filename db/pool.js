
const Pool = require("pg").Pool;


const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.HOST,
  database: process.env.DB,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT,
  // ssl: {
  //   rejectUnauthorized: false
  // }
});

pool.connect((err) => {
  if (err) {
    console.log("postgres error", err);
  } else {
    console.log("postgres connected")
  }
});

module.exports = pool;
