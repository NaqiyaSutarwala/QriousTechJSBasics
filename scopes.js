// // // const a = function(){
// // //     let one = 'One'
// // //     const b = function(){
// // //         console.log(one);
// // //     }
// // // }

// // // fetch('').then(() => {

// // // }).then(()=> {}).catch((err))

// // const asyncAwait = async function(){
// //    try{
// //     const response = await fetch()
// //     const data = await

// //    }catch{

// //    }
// // // }

// // const arrayS = [1, 2, 3, 4, 5];
// // // const newE = arrayS.find((e) => {
// // //   return e.a == "1";
// // // });

// // // newE.a = "3";

// // console.log(arrayS);

// // arrayS.forEach((item) => {
// //   console.log(item);
// //   item * 2;
// // });

// // console.log(arrayS);

// const arrayS = [{ a: "1" }, { a: "2" }];
// Object.freeze(arrayS);

// arrayS.forEach((e) => {
//   e.a = "3";
// });

// console.log(arrayS);

// const arrayS = [{ a: "1" }, { a: "2" }];

// const newE = arrayS.forEach((e) => {
//   return e.a == "1";
// });

// newE.a = "3";

// console.log(arrayS);

// console.log(
//   arr.some((item) => {
//     return Array.isArray(item);
//   })
// );
let data = [];
const flatArray = function (arr) {
  const newArray = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      newArray.push(...item);
    } else {
      newArray.push(item);
    }
  });
  data = [];
  data.push(...newArray);
  if (
    newArray.some((item) => {
      return Array.isArray(item);
    })
  ) {
    flatArray(newArray);
  }
};

flatArray([
  1,
  [[[[[[2]]]]]],
  3,
  4,
  5,
  [[[[[[[[[[[[[[[[[[[[[[[[[[[[[5]]]]]]]]]]]]]]]]]]]]]]]]]]]]],
  [[[5]]],
  [[[[[[59]]]]]],
  [[[[[3]]]]],
  [[[[[[[[[[[[[[4]]]]]]]]]]]]]],
  [[[[[[[[[[[[[[[[[[[[5]]]]]]]]]]]]]]]]]]]],
]);

console.log(data);

// function myFunction(a) {
//   return a.length;
// }

// console.log(myFunction([1, 2, 2, 4]));

// function myFunction(a) {
//   stringArr = a.split("");
//   slicedArr = stringArr.slice(0, 3);
//   return slicedArr.join("");
// }

// console.log(myFunction("abcdefg"));

function myFunction(a) {
  let obj = {};
  obj.key = a;
  console.log(obj);
  return;
}

myFunction("a");
