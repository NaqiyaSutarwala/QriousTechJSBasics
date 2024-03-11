function squareDigits(num) {
  const numberArray = String(num).split("");
  console.log(numberArray);
  const squared = numberArray
    .map((num) => {
      return num * num;
    })
    .join("");

  const squaredNumber = Number(squared);
  console.log(squared);
  return squaredNumber;
}

squareDigits(765);

console.log("5" * "5");
