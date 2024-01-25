const temperatures = [3, -2, -6, -1, "error"];
const temperaturesTwo = [9, 13, 17, 15, 14, 9, 5];

const num = 1;
const obj = {
  key: "value",
  key1: "value1",
};

for (let item in obj) {
  console.log(obj[1]);
}

const calcTempAmplitude = (arr, secondArr) => {
  let filteredArray = arr.concat(secondArr);

  filteredArray = filteredArray
    .filter((item) => {
      return item !== "error";
    })
    .sort((a, b) => {
      return b - a;
    });

  console.log(filteredArray);

  let amplitude = filteredArray[0] - filteredArray[filteredArray.length - 1];

  return amplitude;
};

console.log(calcTempAmplitude(temperatures, temperaturesTwo));
