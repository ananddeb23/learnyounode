const bl = require('bl');
const http = require('http');

// function httpcollect(response) {
//   response.pipe(bl((error, data) => {
//     console.log(data.toString);
//   }));
// }
http.get(process.argv[2], (response) => {
  response.pipe(bl((error, data) => {
    if (error) {
      return console.error(error);
    }
    console.log(data.length);
    console.log(data.toString());
  }));
});
