const port = 8080;
let http = require('http');

http.createServer((req, res) => {
    console.log('url:', req.url);
    res.end('hello world');
}).listen(port, (error) => {
    console.log(`server is running on ${port}`);
});
