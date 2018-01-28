const hello = require('./hello');

// let outputData = '';
// storeLog = inputs => (outputData += inputs);
// test('console log test', () => {
//   hello.print = jest.fn(storeLog);
//
//   expect(outputData).toBe('text');
// });
global.console = {
  warn: jest.fn(),
  log: jest.fn(),
};
describe('function runs correctly', () => {
  test('returns safely with type undefined', () => {
    expect(hello.printHello()).toBe(undefined);
  });
  test('check console.log output', () => {
    expect(global.console.log).toHaveBeenCalledWith('HELLO WORLD');
  });
});
