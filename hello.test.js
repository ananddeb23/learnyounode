const hello = require('./hello');

// let outputData = '';
// storeLog = inputs => (outputData += inputs);
// test('console log test', () => {
//   hello.print = jest.fn(storeLog);
//
//   expect(outputData).toBe('text');
// });
describe('function runs correctly', () => {
  test('returns undefined', () => {
    expect(hello.printHello()).toBe(undefined);
  });
});
