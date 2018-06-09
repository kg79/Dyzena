const http = require('http');
const fs = require('fs');
const PORT = process.env.PORT || 3334;

http.Server((req, res) => {

    if (req.url === '/') {
        res.send()
    }

}).listen(PORT, () => console.log('localhost:'+ PORT))