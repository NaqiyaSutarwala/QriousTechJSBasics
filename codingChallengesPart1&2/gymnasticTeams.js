let DolphinsOne = 85;
let DolphinsTwo = 54;
let DolphinsThree = 41;

let KoalasOne = 23;
let KoalasTwo = 34;
let KoalasThree = 27;


// Part One
// let dolphinsAverage = DolphinsOne + DolphinsTwo + DolphinsThree / 3;
// let KoalasAverage = KoalasOne + KoalasTwo + KoalasThree / 3;

// if (
//   dolphinsAverage == KoalasAverage &&
//   dolphinsAverage > 100 &&
//   KoalasAverage > 100
// ) {
//   console.log("Theres a draw");
// } else if (dolphinsAverage > KoalasAverage && dolphinsAverage > 100) {
//   console.log("Team Dolphins a winner");
// } else if (KoalasAverage > dolphinsAverage && KoalasAverage > 100) {
//   console.log("Team Koalas a winner");
// }

// Part 2
var avgDolphins = 0;
var avgKoalas = 0;

const calcAverage = () => {
  avgDolphins = DolphinsOne + DolphinsTwo + DolphinsThree / 3;
  avgKoalas = KoalasOne + KoalasTwo + KoalasThree / 3;
  console.log(avgDolphins);
  console.log(avgKoalas);
};

const checkWinner = (avgDolphins, avgKoalas) => {
  console.log(avgDolphins);
  console.log(avgKoalas);
  if (avgDolphins >= avgKoalas * 2) {
    console.log("Team Dolphins win");
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log("Team Koalas Win");
  } else {
    console.log("No winner yet");
  }
};

calcAverage();
checkWinner(avgDolphins, avgKoalas);
