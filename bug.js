const http = require('http');

const server = http.createServer((req, res) => {
  // Keep the connection open indefinitely
  // This will lead to an unhandled exception and crash

  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });

  // Missing 'res.end()' to close the response
  // This is the main source of error in this scenario
  // res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});