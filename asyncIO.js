const fs = require('fs');

function readFile() {
  const buffer = fs.readFile(process.argv[2], 'utf8', (err, data) => {
    // console.log(data);
    if (err) {
      console.error(err);
    } else {
      console.log(process.argv[2]);
      console.log(data.split('\n').length - 1);
    }
  });
  // console.log('I ran ');
}
// readFile();
function readFiledummy(arg, cllbck) {
  const buffer = fs.readFile(arg, 'utf8', (err, data) => {
    // console.log(data);
    if (err) {
      return cllbck(err);
    }
    // console.log(process.argv[2]);

    cllbck(data.split('\n').length - 1);
  });
  // console.log('I ran ');
}
module.exports.readFiledummy = readFiledummy;
