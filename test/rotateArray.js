// Write a function that rotates an array to the right by a given number of steps.
//  For example, rotateArray([1, 2, 3, 4, 5], 2) should return [4, 5, 1, 2, 3].

const rotateArray = function (arr, rotate) {
  const arrCopy = [...arr];
  let items = arrCopy.splice(-rotate);

  const newArr = [...items, ...arrCopy];
  console.log(newArr);
};

rotateArray([1, 2, 3, 4, 5], 3);
