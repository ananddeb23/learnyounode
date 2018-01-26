const fs = require('fs');

function readFile() {
  const buffer = fs.readFileSync(process.argv[2]);
  const res = buffer.toString();
  // console.log(res);
  const newline = res.split(/\n/);
  console.log(newline.length - 1);
}
readFile();
