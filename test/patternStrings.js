// Create a function that returns true if two strings share the same letter pattern, and false otherwise.

const sameLetterPattern = function (wordOne, wordTwo) {
  const wordOneArr = wordOne.split("");
  const wordTwoArr = wordTwo.split("");
  let indexArraysOne = [];
  let indexArraysTwo = [];

  wordOneArr.forEach((item) => {
    indexArraysOne.push(wordOneArr.indexOf(item));
  });

  wordTwoArr.forEach((item) => {
    indexArraysTwo.push(wordTwoArr.indexOf(item));
  });

  const result = indexArraysOne.every((_, index) => {
    if (indexArraysOne[index] === indexArraysTwo[index]) return true;
  });
  console.log(result);
};

sameLetterPattern("aszyym", "pqszzn");
