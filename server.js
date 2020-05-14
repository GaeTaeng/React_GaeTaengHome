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
    console.log("(DB) connection boardtbl GET")
    if (error) throw error;
    // connected!
    console.log("taenghome's boardtbl values : ");
    res.json(rows);


  });
});

app.post('/api/contents', (req, res) => {
 // res.header("Access-Control-Allow-Origin", "*");
  var title = req.body[title];
  var contents = req.body[contents];
  var writer = req.body[writer];
  var today = new Date();
  var year = today.getFullYear(); // 년도
  var month = today.getMonth() + 1;  // 월
  var date = today.getDate();  // 날짜
  var hours = today.getHours(); // 시
  var minutes = today.getMinutes();  // 분
  var seconds = today.getSeconds();  // 초

  var thisdate = year+'/'+month+'/'+date+' '+hours+':'+minutes+':'+seconds;
  //connection.query('insert into boardtbl (id, title, content, writer, date) values("0, '+title+', '+ contents+', '+ writer+', '+ thisdate+'")', function(err, rows) {
    console.log("(DB) connection boardtbl POST")
    connection.query('insert into boardtbl (title, content, writer, date) values(\''+ title+'\', \''+ contents+'\', \''+ writer+'\', \''+ thisdate.toString()+'\')', function(err, rows) {
    console.log(''+ title+'\', \''+ contents+'\', \''+ writer+'\', \''+ thisdate.toString()+'')
    if(err) { throw err;}
    console.log("Data inserted!");
})
});


app.get('/api/contentsdelete', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  console.log("(DB)connection boardtbl will DELETE");

  connection.query('delete from boardtbl  where title="undefined";', function (error, rows) {
    console.log("(DB) connection boardtbl GET")
    if (error) throw error;
  });
});
app.listen(port, () => console.log(`Listening on port ${port}`));


