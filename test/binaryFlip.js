function longestContiguousOnes(arr, flips) {
  const arrayCopy = [...arr];
  let flipped = [];
  let oneArrays = [];
  let index, count;
  for (let i = 0; i < arr.length; i++) {
    count = 0;
    if (flips > 0) {
      if (arr[i] === 0) {
        index = i;
        arr[i] = 1;
        flips--;
      }

      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) count++;
        if (arr[i] == 0) break;
        // flipped = [];
        // flipped.push(i);
      }

      console.log(count);

      // const index = arr.indexOf(1);
      let slicedArr = arr.slice(0, count);
      console.log(slicedArr, "sliced");
      if (oneArrays.length < count) {
        // oneArrays = [];
        oneArrays.push(slicedArr, i);
        // console.log(flips);
      } 
      arr[i] = 0;
      if ((arr[i] = 0)) {
        arr[i] = 2;
      }
      arr = arrayCopy;
    }
  }
  console.log(arr);
  console.log(oneArrays, "arr");
  // console.log(flipped, "sj");

  // console.log(index, "d");

  // console.log(arrayCopy);
  // console.log(oneArrays, "ms");
}

longestContiguousOnes([1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], 3); // Output: [2]
