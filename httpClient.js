const http = require('http');

function callbck(response) {
  response.setEncoding('utf8');
  response.on('error', error => console.error(error));
  response.on('data', (data) => {
    console.log(data);
  });
}
function geturl() {
  http.get(process.argv[2], callbck);
}
geturl();
