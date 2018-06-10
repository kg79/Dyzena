const express = require('express');
const app = express();
const PORT = process.env.PORT || 3334;
const serveStatic = require('serve-static');
const path = require('path');


app.use(serveStatic(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send();
})
app.get('/favicon.ico', (req, res) => {
    res.send('my favorite')
})
app.listen(PORT, () => console.log('localhost:'+ PORT))


