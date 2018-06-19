const express = require('express');
const app = express();
const PORT = process.env.PORT || 3334;
const serveStatic = require('serve-static');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;


app.use(serveStatic(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/keyboard', (req, res) => {
    res.sendFile(path.join(__dirname + '/keyboard.html'));
})

app.get('/newStuff', (req, res) => {
    MongoClient.connect("mongodb://localhost:27017/music", function(err, client) {
    let db = client.db('music');
        db.collection('notes').find().toArray(function(err, result) {
            res.render('keyboard', {
                result:result
            });
        });
    });
})


app.get('/favicon.ico', (req, res) => {
    res.send('my favorite')
})

app.listen(PORT, () => console.log('localhost:'+ PORT))


