var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost', // Your connection adress (localhost).
  user: 'root', // Your database's username.
  password: '', // Your database's password.
  database: 'eless', // Your database's name.
})
router.post('/', function(req, res, next) {
  console.warn(req.body.username);
  connection.query("Select * from user", function (err, row, field) {
    if(row.length > 0) {
      res.send({message: row[0]})
    }
  })
  ;
});

module.exports = router;
