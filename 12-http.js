const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end('Welcome to our home page');
    }
    
    if (req.url === '/about') {
        res.end('Here is a short history');
    }
    
    res.end(`
        <h1>Opps!</h1>
        <p>We can't seem to find the page you're looking  for </p>
        <a href="/">back to home</a>`)
    
});

server.listen(5000);