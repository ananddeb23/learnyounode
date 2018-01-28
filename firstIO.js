const fs = require('fs');

function readFile(arg) {
  const buffer = fs.readFileSync(arg);
  const res = buffer.toString();
  // console.log(res);
  const newline = res.split(/\n/);
  console.log(newline.length - 1);
}
// readFile();

module.exports.readFile = readFile;
