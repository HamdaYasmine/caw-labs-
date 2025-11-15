const { first, last, chunk, myColor } = require('./exo2');

test('first returns first elements', () => {
  expect(first([1, 2, 3], 2)).toEqual([1, 2]);
});

test('last returns last elements', () => {

  expect(last([1, 2, 3], 2)).toEqual([2, 3]);
});

test('chunk divides array', () => {
  expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
});

test('myColor array exists', () => {
  expect(myColor).toEqual(["Red", "Green", "White", "Black"]);
});