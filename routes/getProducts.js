var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//connect to db
var connection = mysql.createConnection({
    host: 'localhost', // Your connection adress (localhost).
    user: 'root', // Your database's username.
    password: '', // Your database's password.
    database: 'eless', // Your database's name.
})
//req: frontend
router.post('/', function(req, res, next) {
    console.warn(req.body.username); //req: header,body

    //get data from db
    connection.query("Select * from product", function (err, row, field) {
        if(row.length > 0) { //row: query
            res.send({message: row})
        }
    })
    ;
});

module.exports = router;
