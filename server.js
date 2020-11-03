const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((request, response) => {
    body = JSON.stringify({
        text: 'Hello World!'
    });

    response.statusCode = 200;
    response.setHeader('Content-type', 'application/json');
    response.end(body);
});

server.listen(port, hostname, () => {
    console.log(`Server waiting for requests on http://${hostname}:${port}`);
});

module.exports = server;