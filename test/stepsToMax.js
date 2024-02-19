const incrementToTop = function (arr) {
  let MaxNumber = Math.max(...arr);
  let steps = 0;
  arr.map((item) => {
    if (item < MaxNumber) {
      steps += MaxNumber - item;
    }
  });
  console.log(steps);
};

incrementToTop([9, 4, 4]);
