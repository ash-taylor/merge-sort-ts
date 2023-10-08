import mergeSort from '../src/mergeSort';

test('sorts [2, 1, 5, 3] to [1, 2, 3, 5]', () => {
  expect(mergeSort([2, 1, 5, 3])).toStrictEqual([1, 2, 3, 5]);
});

test('sorts [11, 23, -5, 2, 1, 5, 3] to [-5, 1, 2, 3, 5, 11, 23]', () => {
  expect(mergeSort([11, 23, -5, 2, 1, 5, 3])).toStrictEqual([
    -5, 1, 2, 3, 5, 11, 23,
  ]);
});

test('Empty array returns []', () => {
  expect(mergeSort([])).toStrictEqual([]);
});
