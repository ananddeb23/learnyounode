const asyncio = require('./asyncIO');

global.console = {
  warn: jest.fn(),
  log: jest.fn(),
};
describe('function returns correct output', () => {
  // const filename = '/Users/anandshankardeb/node/learn/text.txt';
  // test('returns a number', () => {
  //   expect(typeof (asyncio.readFiledummy(filename))).toBe('number');
  // });
  test('Correct output  value for file with empty file', (done) => {
    const callback = (data) => {
      expect(data).toBe(0);
      done();
    };
    asyncio.readFiledummy('/Users/anandshankardeb/node/learn/empty.txt', callback);
  });
  test('Correct output  value for file with empty file', (done) => {
    const callback = (data) => {
      expect(data).toBe(3);
      done();
    };
    asyncio.readFiledummy('/Users/anandshankardeb/node/learn/text.txt', callback);
  });
});
