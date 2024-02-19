// const zeroIndices = function (arr, flip) {
//   let count = 0;
//   let newCount;
// arr.forEach((item, index) => {
//   if (item == 0) {
//     arr[index] = 1;
//   }
//   console.log(arr);
// });

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 0) {
//     arr[i] = 1;

//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] === 0) {
//         let index = arr.indexOf(0);
//         console.log(arr.slice(0, index));
//         break;
// //       }
// //     }
// //   }
// //   console.log(arr);
// // }

// function zeroIndices(arr, k) {
//   let count = 0;
//   const indices = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       count = 0;
//     } else {
//       count++;
//       if (count > k && indices.length > 0) {
//         indices.shift();
//       }
//       indices.push(i);
//     }
//   }
//   return indices;
// }

// function zeroIndices(arr, k) {
//   let count = 0;
//   let indices = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       count = 0;
//       indices = indices.slice(Math - k); // Keep only last k indices
//     } else {
//       count++;
//       indices.push(i);
//     }
//   }
//   // Last k elements of 'indices' are the answer
//   return indices.slice(-k);
// }

const indices = zeroIndices([1, 0, 1, 1, 0, 0, 1], 1);
console.log(indices);

// console.log(newArr);

// for (let i = flip; i > 0; ) {
// newCount = 0;
// for (let i = flip; i > 0; ) {
//   console.log(i);
//   if (arr[i] == 0) {
//     arr[i] = 1;
//   }
//   console.log(arr);
//   if (arr[i] === 1) {
//     newCount++;
//   } else if (arr[i] === 0) {
//     break;
//   }
//   if (count < newCount) {
//     console.log("in if");
//     count = newCount;
//     i--;
//     console.log(count);
//   }
// }
// return arr;
// };
