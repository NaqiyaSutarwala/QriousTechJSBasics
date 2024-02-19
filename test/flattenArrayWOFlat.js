// let arr = [1, [[2]], [[[[[[3]]]]]],4,4];

const numberArrayFlatter = [];

const flattenArr = function (arr) {
  arr.forEach((item) => {
    let numberArray;
    if (Array.isArray(item)) {
      [numberArray] = item.map((dataIn) => {
        let [data] = dataIn;
        return data;
      });
      if (Array.isArray(numberArray)) {
        flattenArr(numberArray);
      } else {
        numberArrayFlatter.push(numberArray);
      }
    } else {
      numberArrayFlatter.push(item);
    }
  });
};

flattenArr([
  1,
  [[[[[[2]]]]]],
  3,
  4,
  5,
  [[[[[[[[[[[[[[[[[[[[[[[[[[[[[5]]]]]]]]]]]]]]]]]]]]]]]]]]]]],
  [[[5]]],
  [[[[[[59]]]]]],
  [[[[[3]]]]],
  [[[[[[[[[[[[[[4]]]]]]]]]]]]]],
  [[[[[[[[[[[[[[[[[[[[5]]]]]]]]]]]]]]]]]]]],
]);
console.log(numberArrayFlatter);
