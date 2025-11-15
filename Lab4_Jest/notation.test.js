const { mean } = require('./notation');

test('mean calculates average', () => {
  expect(mean([1, 2, 3])).toBe(2);
});

test('mean returns 0 for empty array', () => {
  expect(mean([])).toBe(0);
});