const http = require('http');
const mapper = require('through2-map');

const server = http.createServer((request, response) => {
  if (request.method === 'POST') {
    request.pipe(mapper(chunk => chunk.toString().toUpperCase())).pipe(response);
  }
});
server.listen(process.argv[2]);
