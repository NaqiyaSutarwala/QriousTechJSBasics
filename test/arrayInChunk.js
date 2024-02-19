// Write a function that takes an array and chunk size as input and splits the array into smaller arrays of the specified size.
// For example, chunk([1, 2, 3, 4, 5], 2) should return [[1, 2], [3, 4], [5]]

const arrayT = [];
const arrayInChunk = function (arr, limit) {
  const data = arr
    .map((item, index) => {
      if (index <= limit - 1) {
        return item;
      }
    })
    .filter((item) => {
      return item !== undefined;
    });
  arr.splice(0, limit);
  arrayT.push(data);

  if (arr.length > limit) {
    arrayInChunk(arr, limit);
  } else {
    arrayT.push(arr);
  }


};
arrayInChunk([1, 2, 3, 4, 5], 1);
console.log(arrayT);
