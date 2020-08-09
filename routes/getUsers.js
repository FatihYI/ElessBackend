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
  //console.warn(req.body.email);
  connection.query("SELECT * FROM user WHERE email = '"+ req.body.email+ "' AND password = '"+ req.body.password+ "'  ", function (err, row, field) {
    if(row.length > 0) {
      res.send({message: row[0]});
      //res.send({email: req.body.email});


    }
    else
      res.send({message:-1})
  })
  ;
});

module.exports = router;
