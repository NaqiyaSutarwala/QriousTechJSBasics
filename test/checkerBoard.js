// const isCheckerBoard = function (arr) {
//   const flatternArr = arr.flat();
//   console.log(flatternArr);
//   let last;
//   arr.map((item, index) => {
//     const data = item.map((current, index) => {
//       if (item.length >= index - 1) {
//         if (item.length == index + 1) return;

//         if (current === 0) {
//           if (item[index + 1] === 1) {
//             return true;
//           } else {
//             return false;
//           }
//         }
//         if (current === 1) {
//           if (item[index + 1] === 0) {
//             return true;
//           } else {
//             return false;
//           }
//         }
//       }
//     });
//     [last] = item.slice(-1);
//     console.log(last);
//     if (item[0] === last) {
//       console.log(false);
//     }
//     console.log(data);
//   });
// };

// isCheckerBoard([
//   [1, 0],
//   [0, 1],
// ]);

const isCheckerBoard = function (arr) {
  const flattenedArray = arr.flat();
  const data = flattenedArray.map((item, index) => {
    if (flattenedArray.length == index + 1) return;
    if (item === 1) {
      if (flattenedArray[index + 1] !== 0) return false;
    }
    if (item === 0) {
      if (flattenedArray[index + 1] !== 1) return false;
    }
  });

  const result = data.some((item) => {
    return item === false;
  });

  if (result) {
    console.log(false);
  } else {
    console.log(true);
  }
};

isCheckerBoard([
  [1, 0, 1, 0, 1, 0, 1, 1],
  [0, 1, 0, 1, 0, 1, 0, 1],
]);
