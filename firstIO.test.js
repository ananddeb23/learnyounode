const firstio = require('./firstIO');

global.console = {
  warn: jest.fn(),
  log: jest.fn(),
};

describe('Tests for checking the log of newline characters by the function that reads the contents of the file specified in the command line argument', () => {
  test('Testing with 3 lines', () => {
    firstio.readFile('/Users/anandshankardeb/node/learn/text.txt');
    expect(global.console.log).toHaveBeenCalledWith(3);
  });
  test('Testing with empty file', () => {
    firstio.readFile('/Users/anandshankardeb/node/learn/empty.txt');
    expect(global.console.log).toHaveBeenCalledWith(0);
  });
});
