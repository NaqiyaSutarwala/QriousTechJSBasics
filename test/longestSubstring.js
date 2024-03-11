const longestSubstring = function (str) {
  const arrayString = str.split("");
  let final = [];
  let unique = [];
  let word;
  arrayString.forEach((item) => {
    if (!unique.includes(item)) {
      unique.push(item);
    } else {
      final.push(unique);
      unique = [];
      unique.push(item);
    }
  });
  if (arrayString.length - 1) final.push(unique);

  const SubStringLength = final.reduce((acc, curr, i) => {
    if (curr.length > acc) {
      acc = curr.length;
      word = curr;
    }
    return acc;
  }, 0);

  console.log(word);
  console.log(SubStringLength);

  console.log(final);
};

longestSubstring("abcdabcdeabcdef");

// const arrayT = ["1"];
// const string1 = "1";
// // const tempObj = [];

// // if (tempObj[string1] in arrayT) {
// //   console.log("nsds");
// // }

// // console.log((tempObj[string1[0]] = 0));

// const obj = {
//   k: 1,
// };

// console.log(k in obj);
