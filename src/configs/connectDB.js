// get the client

import mysql from 'mysql2/promise';

// create the connection to database
console.log('Creating connection pool....');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'lab3_nodejs',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


export default pool;