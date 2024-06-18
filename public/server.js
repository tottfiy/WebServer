const express = require('express');
const server = express();
const PORT = 8888;
const path = require('path');
server.use(express.urlencoded({ extended: false })); // Parse POST data
server.use(express.json());
server.use(express.static(path.join(__dirname, 'public')));
server.use('/images', express.static(path.join('images')));

server.get('/', function(req, res) {
    console.log("Dear client connected");
    res.sendFile(__dirname+'/register.html'); // Serve register.html
});

server.get('/site.html', function(req, res) {
    res.sendFile(__dirname + '/site.html'); // Serve site.html
});

server.post('/log', function (req, res)  {

    console.log(req.body);
    res.sendFile(__dirname + '/site.html');
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

