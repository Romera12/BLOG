const mysql = require('mysql2');

require('dotenv').config();

const { DB_HOST, DB_USER, DB_PORT, DB_DATABASE, DB_PASSWORD } = process.env;

const pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
});

module.exports = pool.promise();