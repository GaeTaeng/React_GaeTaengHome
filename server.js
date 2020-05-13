const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000;


console.log("why!!!!!!!!!!");

//DB(MYSQL) 연결 Start
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'rlaxogns2!',
  database: 'taenghome',
  port: 3306,
  insecureAuth: true
});
connection.connect(function (err) {
  if (err) {
    console.error('(DB MYSQL ERROR ! ) ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});
//DB연결 END
console.log("why!!!!!!!!!!222");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//cors 미들웨어
const corsOptions = {
  origin: "http://localhost:80",
  credentials: true,
};
app.use(cors(corsOptions));

//REST API
app.get('/', (req, res) => {
  res.send({ message: 'Welcome! Start' });
  console.log("HI!");
});




app.get('/api/contents', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  console.log("(DB)connection boardtbl");

  connection.query('SELECT * from boardtbl', function (error, rows) {
    console.log("this error (DB) connection boardtbl")
    if (error) throw error;
    // connected!
    console.log("taenghome's boardtbl values : ");
    res.json(rows);


  });
});



app.listen(port, () => console.log(`Listening on port ${port}`));


