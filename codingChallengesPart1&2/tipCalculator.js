let billValues = 275;
let tip = 0;

// Part 1
// billValues >= 50 && billValues <= 300
//   ? (tip = (billValues * 15) / 100)
//   : (tip = (billValues * 20) / 100);

// console.log(billValues);
// console.log(tip);
// console.log(billValues + tip);

//   Part 2
// let bills = [];
// let tips = [];
// let total = [];

// function calcTip(billValue) {
//   billValue >= 50 && billValue <= 300
//     ? (tip = (billValue * 15) / 100)
//     : (tip = (billValue * 20) / 100);

//   bills.push(billValue);
//   tips.push(tip);
//   total.push(billValue + tip);

//   //   console.log(billValue);
//   //   console.log(tip);
//   //   console.log(billValue + tip);
// }

// calcTip(100);
// calcTip(200);
// calcTip(350);
// calcTip(2000);

// console.log(bills);
// console.log(tips);
// console.log(total);

// Part three

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = () => {
  bills.map((item) => {
    console.log(item);

    item >= 50 && item <= 300
      ? (tip = (item * 15) / 100)
      : (tip = (item * 20) / 100);

    tips.push(tip);

    let total = tip + item;

    totals.push(total);
  });

  console.log(bills);
  console.log(tips);
  console.log(totals);
};

calcTip();
