const http = require('http');
const bl = require('bl');

let counter = 0;
const list = [];
function printlist() {
  list.forEach(val => console.log(val));
}

function getHttp(urlNo) {
  http.get(process.argv[urlNo + 1], (response) => {
    response.pipe(bl((error, data) => {
      if (error) {
        return console.error(error);
      }

      list[urlNo - 1] = data.toString();
      counter += 1;
      if (counter === 3) {
        printlist();
      }
    }));
  });
}
getHttp(1);
getHttp(3);
getHttp(2);
