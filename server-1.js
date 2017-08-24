const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

//const router = require('./controllers/routesController');
const url = require('url');

function init(req, res) {
    var pathname = url.parse(req.url, true).pathname;
    console.log(pathname);
    if (pathname === '/forside') {

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write("Forside");
        res.end();
    } else {
        res.statusCode = 404;
        res.end("Ups siden findes ikke...");
    }
}



http.createServer(function (req, res) {
    init(req, res);
}).listen(port, hostname);

console.log('serveren kører på http://${hostname}:${port}/');
