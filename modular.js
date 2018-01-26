const fs = require('fs');
const path = require('path');

module.exports = (dir, ext, callbck) => {
  const inpExt = `.${ext}`;
  const buffer = fs.readdir(dir, 'utf8', (err, dirList) => {
    if (err) {
      callbck(err);
    } else {
      const useful = dirList.filter(fileName => path.extname(fileName) === inpExt);
      // useful.forEach((filenm) => { console.log(filenm); });
      callbck(null, useful);
    }
  });
};

// module.exports.readDir = readDir;
// module.exports = readDir;
