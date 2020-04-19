const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))

//REST API
app.get('/', (req, res) => {
    res.send({message: 'Welcome! Start'});
});


app.get('/api/contents', (req, res) => {
    nowDate = Date.now.toString;
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

app.listen(port, () => console.log(`Listening on port ${port}`));