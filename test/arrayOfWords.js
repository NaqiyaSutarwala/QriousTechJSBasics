const arrOfWords = [
  "hello",
  "eses",
  "merry",
  "dear",
  "deere",
  "twoee",
  "One",
  "two",
  "three",
  "Five",
];

// let newArr = arrOfWords
//   .map((item) => {
//     let count = 0;
//     item.split("").map((item) => {
//       if (item === "e") {
//         count++;
//       }
//     });

//     if (count === 1) {
//       return item + "e";
//     } else if (count > 2) {
//       return item;
//     } else if (count === 2) {
//     }
//   })
//   .filter((item) => {
//     return item !== undefined;
//   });

let arr = [];

for (let i = 0; i < arrOfWords.length; i++) {
  let count = 0;
  const regex = /.*e.*e.*/;

  if (!regex.test(arrOfWords[i])) {
    arr.push(arrOfWords[i] + "e");
  }


  if (count === 1) {
    arr.push(arrOfWords[i] + "e");
  }
}

console.log(arr);
