

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'rlaxogns2!',
  database : 'taenghome'
});
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });

  connection.query('SELECT * from usertbl', function (error, results, fields) {
    if (error) throw error;
    // connected!
    console.log(results);
  });

 
connection.end();