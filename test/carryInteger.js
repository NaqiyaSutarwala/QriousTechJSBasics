
const carryDigits = function (num1, num2) {
  numberOne = String(num1);
  numberTwo = String(num2);
  const numOneArr = numberOne.split("").reverse();
  const numTwoArr = numberTwo.split("").reverse();
 
  let carry = 0;

  numOneArr.map((item, i) => {
    const numberItem = Number(item);
    if (numberItem + Number(numTwoArr[i]) >= 10) {
      carry++;
      numOneArr[i + 1] = Number(numOneArr[i + 1]) + 1;
    }
  });
  console.log(carry);
};

carryDigits (9862, 285);
