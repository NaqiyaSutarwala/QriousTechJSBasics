const arr = [4, 6, 3, 4, 6, 5, 70, 8, 60];
let temp = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] < arr[i]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

console.log(`Second Highest Number is ${arr[1]}`);
