const canSeeStage = function (arr) {
  const length = arr[0].length;
  const flattenedArray = arr.flat();
  const answer = flattenedArray.map((item, index) => {
    if (item < flattenedArray[index + length]) {
      return true;
    } else {
      return false;
    }
  });
  answer.splice(-length);
  const result = answer.every((item) => {
    return item == true;
  });
  console.log(result);
};

canSeeStage([
  [0, 0, 0, 56, 7],
  [3, 1, 5, 100, 80],
  [6, 2, 7, 106, 96],
]);
