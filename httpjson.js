const http = require('http');
const url = require('url');

function getUnix(prop) {
  const date = new Date(prop.query.iso);
  const milli = date.getTime();
  const result = { unixtime: milli };
  return result;
}
function getISO(prop) {
  const date = new Date(prop.query.iso);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const result = {
    hour: hours,
    minute: minutes,
    second: seconds,
  };
  return result;
}
const server = http.createServer((request, response) => {
  const prop = url.parse(request.url, true);
  const pathname = prop.pathname;
  console.log(pathname);
  // response.writeHead(200, { 'content-type': 'application/json' });
  if (pathname === '/api/unixtime') {
    const res = getUnix(prop);
    response.writeHead(200, { 'content-type': 'application/json' });
    response.end(JSON.stringify(res));
  } else if (pathname === '/api/parsetime') {
    const res = getISO(prop);
    response.writeHead(200, { 'content-type': 'application/json' });
    response.end(JSON.stringify(res));
  } else {
    response.writeHead(404);
    response.end();
  }
});
server.listen(process.argv[2]);
