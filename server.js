const express = require('express');
const app = express();
const PORT = process.env.PORT || 3334;

app.get('/', (req, res) => {
    res.send('dome sweet dome')
})
app.get('/favicon.ico', (req, res) => {
    res.send('my favorite')
})
app.listen(PORT, () => console.log('localhost:'+ PORT))