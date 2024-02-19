// A number has a breakpoint
// if it can be split in a way where the digits on the left side and the digits on the right side sum to the same number.

// For instance, the number 35190 can be sliced between the digits 351and 90, since 3+5+19 and 909. On the other hand, the number 555 does not have a breakpoint(you must split between digits).

// Create a function that returns true if a number has a breakpoint, and false otherwise.

// Examples

// breakPoint(159780) true

// breakPoint(112) true

// breakPoint(1034) true

// breakPoint(10) false

// breakPoint(343) false

const breakPoint = function (num) {
  const numString = String(num);
  const numberArray = numString.split("");
  const newArray = [...numberArray];
  const value = newArray.map((item, index) => {
    const tryA = newArray.slice(0, index + 1);
    numberArray.splice(index, 1);

    const sumFirstHalf = tryA.reduce(
      (acc, curr) => (acc = acc + Number(curr)),
      0
    );
    const sumSecondHalf = numberArray.reduce((acc, curr) => {
      return (acc = acc + Number(curr));
    }, 0);

    if (sumFirstHalf === sumSecondHalf) {
      return true;
    } else {
      return false;
    }
  });

  const valueBooleon = value.some((item) => {
    return item !== false;
  });
  
  if (valueBooleon){
    return true
  }else{
    return false
  }
};

console.log(breakPoint(111110));
