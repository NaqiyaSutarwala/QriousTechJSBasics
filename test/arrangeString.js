// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words) {
  const orderedArray = [];
  const wordsArr = words.split(" ");
  console.log(wordsArr);
  const arrangedArr = wordsArr.map((item, index) => {
    const check = index + 1;
    if (item.includes(index)) {
      console.log(index + 1);
      console.log("in");
      //   orderedArray[0] = item;
      orderedArray[check - 1] = item;
    }
  });
  console.log(orderedArray);
}

order("is2 Thi1s T4est 3a");
