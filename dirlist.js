const fs = require('fs');
const path = require('path');

function readDir() {
  const inpExt = `.${process.argv[3]}`;
  const buffer = fs.readdir(process.argv[2], 'utf8', (err, dirList) => {
    // console.log(data);
    const useful = dirList.filter(fileName => path.extname(fileName) === inpExt);
    useful.forEach((filenm) => { console.log(filenm); });
  });
  // console.log('I ran ');
}

// readDir();
function readDirdummy(filepath, ext, callbck) {
  const inpExt = `.${ext}`;
  const buffer = fs.readdir(filepath, 'utf8', (err, dirList) => {
    // console.log(data);
    const res = [];
    const useful = dirList.filter(fileName => path.extname(fileName) === inpExt);
    useful.forEach((filenm) => { res.push(filenm); });
    callbck(res);
  });
  // console.log('I ran ');
}
module.exports.readDirdummy = readDirdummy;
