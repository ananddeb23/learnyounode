const dir = require('./dirlist');

describe('Tests for checking the log of files in a directory with format filter using callback specified', () => {
  test('Verify return value for directory containing the required type of file', (done) => {
    const callback = (data) => {
      expect(data).toEqual(['package-lock.json', 'package.json']);
      done();
    };
    dir.readDirdummy('/Users/anandshankardeb/node/learn/', 'json', callback);
  });
  test('Verify return value for directory not containing the required type of file', (done) => {
    const callback = (data) => {
      expect(data).toEqual([]);
      done();
    };
    dir.readDirdummy('/Users/anandshankardeb/node/learn/', 'jpg', callback);
  });
});
