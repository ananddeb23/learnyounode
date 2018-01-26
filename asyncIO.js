const fs = require('fs');

function readFile() {
  const buffer = fs.readFile(process.argv[2], 'utf8', (err, data) => {
    // console.log(data);
    console.log(data.split('\n').length - 1);
  });
  // console.log('I ran ');
}
readFile();
