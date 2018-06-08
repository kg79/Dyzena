const http = require('http');
const fs = require('fs');
const PORT = process.env.PORT || 3334;

http.Server((req, res) => {

    switch (req.url) {
        case '/':
            fs.readFile('./index.html', 'utf8', (err, data) => {
                if (err) {
                    res.end(err)
                } else {
                    res.end(data)
                }
            })
                break;
        case '/favicon':
            res.end('my favorite')
                break;
        default:
            res.end('what in fucks cunt are you doing?')
                break;
    }

}).listen(PORT, () => console.log('localhost:'+ PORT))