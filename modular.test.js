const modul = require('./modular');
// const callmod = require('./modularCall');

describe('checking for correct output ', () => {
  test('Return value must match correctly for files in directory', (done) => {
    const callback = (error, data) => {
      expect(data).toEqual(['package-lock.json', 'package.json']);
      done();
    };
    modul('/Users/anandshankardeb/node/learn/', 'json', callback);
  });
  test('Return value of empty array for file type not in directory', (done) => {
    const callback = (error, data) => {
      expect(data).toEqual([]);
      done();
    };
    modul('/Users/anandshankardeb/node/learn/', 'jpg', callback);
  });
});
