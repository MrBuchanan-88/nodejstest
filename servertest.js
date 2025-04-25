// Import the http module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Success
  res.setHeader('Content-Type', 'text/plain');
  res.end('NodeJS server test success!\n');
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
