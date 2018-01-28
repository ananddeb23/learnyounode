const sum = require('./sum');

global.console = {
  warn: jest.fn(),
  log: jest.fn(),
};

// describe('Checking the output type of function', () => {
//   test('When no input args given', () => {
//     expect(typeof (dosum())).toBe('number');
//   });
//   test('When input args are given', () => {
//     expect(typeof (dosum(1, 5, -9, 8))).toBe('number');
//   });
// });
describe('Checking the output value of function', () => {
  test('should return correct output value for no input args', () => {
    sum.dosumdummy();
    expect(global.console.log).toHaveBeenCalledWith(0);
  });
  test('should return correct output value when one or more numbers as input args', () => {
    sum.dosumdummy(6, -8, 9, 0);
    expect(global.console.log).toHaveBeenCalledWith(7);
  });
});
