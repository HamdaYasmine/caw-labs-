const notation = require('./notation');

test('fileImport can use notation', () => {
  expect(notation.mean([10, 20])).toBe(15);
});