function merge(array1: number[], array2: number[]): number[] {
  const result: number[] = [];
  let a = 0;
  let b = 0;
  while (result.length < array1.length + array2.length) {
    if (
      array1[a] !== undefined &&
      (array2[b] === undefined || array1[a] < array2[b])
    ) {
      result.push(array1[a]);
      a++;
    } else {
      result.push(array2[b]);
      b++;
    }
  }
  return result;
}

// Utilises array.shift method - needs to re-index array each time executed.
// const mergeShift = (array1: number[], array2: number[]): number[] => {
//   const result: number[] = [];
//   while (array1.length > 0 || array2.length > 0) {
//     const lower =
//       (array1[0] < array2[0] && array1[0] !== undefined) ||
//       array2[0] === undefined
//         ? array1
//         : array2;
//     result.push(lower.shift() as number);
//   }
//   return result;
// };

export default function mergeSort(input: number[]): number[] {
  if (input.length < 2) {
    return input;
  }
  return merge(
    mergeSort(input.slice(0, Math.floor(input.length / 2))),
    mergeSort(input.slice(Math.floor(input.length / 2)))
  );
}
