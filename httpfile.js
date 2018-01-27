const http = require('http');
const fs = require('fs');


const server = http.createServer((request, response) => {
  const read = fs.createReadStream(process.argv[3]);
  // response.writeHead(200, { 'content-type': 'text/plain' });
  read.pipe(response);
});
server.listen(process.argv[2]);
