const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;



//DB(MYSQL) 연결 Start
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
//DB연결 END

  connection.query('SELECT * from usertbl', function (error, results, fields) {
    if (error) throw error;
    // connected!
    console.log("taenghome's usertbl values : ");
    console.log(results);
  });

 
connection.end();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))

//REST API
app.get('/', (req, res) => {
    res.send({message: 'Welcome! Start'});
});

//localhost:port//api/contents
app.get('/api/contents', (req, res) => {
    console.log("HI");
        
    nowDate = Date.now.toString;
    console.log("BACK HI! THIS MYSQL CONNECTION!");


    res.send([
        {
            'id': 1,
            'title': "1 Post",
            'content': "내용1",
            'writer': "ㄱㅌ",
            'date': nowDate
        },
        {
            'id': 2,
            'title': "2 Post",
            'content': "내용2",
            'writer': "힁흐이희잏이ㅣ",
            'date': nowDate
        },
        {
            'id': 3,
            'title': "3 Post",
            'content': "내용3",
            'writer': "탱탱",
            'date': nowDate
        },
        {
            'id': 4,
            'title': "3 Post",
            'content': "까치야~~",
            'writer': "까치까치쒈",
            'date': nowDate
        },
        {
            'id': 5,
            'title': "3 Post",
            'content': "내용55555",
            'writer': "하잏잏아머이ㅏㄴ",
            'date': nowDate
        }
    ]);
});

app.get('/form', function (req, res, next) {
  res.render('form');
})
app.post('/form', function (req, res, next) {
  mysql.query('INSERT INTO boardtbl SET ?', req.body, function(err, rs) {
    res.send('Insert Success');
  })
})





app.listen(port, () => console.log(`Listening on port ${port}`));


