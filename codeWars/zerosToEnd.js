let zeros = [];
function moveZeros(arr) {
  let nonZeros = [];
  arr.forEach((item, index) => {
    if (item === 0) {
      arr.splice(index, 1);
      zeros.push(item);
    }
  });

  if (arr.includes(0)) moveZeros(arr);
  nonZeros = [...arr, ...zeros];
  return nonZeros;
}

console.log(
  moveZeros([
    9, 9, 1, 2, 1, 1, 3, 1, 9, 9, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0,
    +0, +0, +0,
  ])
); // [ 9, 9, 1, 2, 1, 1, 3, 1, 9, 9, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0 ]
