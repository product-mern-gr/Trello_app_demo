// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
});
// with placeholder
connection.query(
    'SELECT * FROM `user` ',
    function (err, results) {
        console.log(results);
    }
);