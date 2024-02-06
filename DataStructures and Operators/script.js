"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Destructuring Objects

// Should be same as the name of key
const { name, categories, openingHours: hours } = restaurant;
console.log(name);
console.log(categories);
console.log(hours);

// destructuring the array
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);

let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a);
console.log(b);
console.log(arr);

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

const ab = [1, 2, 3, [10, 15]];
const bc = [4, 5, 6];
const joined = [...ab, ...bc];
console.log(joined);
joined[3] = 8;
console.log(ab);
console.log(joined);

const splitString = "Naqiya";
const arrOne = [...splitString];
console.log(arrOne);
console.log(splitString.split(""));

function spread(num1, num2, num3) {
  console.log(num1);
  console.log(num2);
  console.log(num3);
}

spread(...bc);

// ShortCircuiting
const num = 1;
console.log(num === 6 || "Jonas");

const abc = 5;

abc === 5 || console.log("ss");

0 || (null && false && "feufh");

// To find the unique value in an array , we can use set

const array = [54, 45, 98, 88, 99, 98, 85, 45, 54];

const setUnique = new Set(array);

// console.log(setUnique); //{ 54, 45, 98, 88, 99, 85 }

// To know the size of unique values in an array
// console.log(setUnique.size);

console.log(setUnique.keys());
setUnique.add({ a: 5, b: 6 });
console.log(setUnique);
const obj = { a: 5, b: 6 };
setUnique.add(obj);
console.log(setUnique);

// In map datastructure, key can have any datatype too

// Populating Set without set method
// We can pass an array as an argument inside which multiple arrays can be passed.
// Value at 0 index will be the key and at 1 index will be a value
const mapData = new Map([
  ["key", "value"],
  [
    2,
    {
      key: "value",
    },
  ],
  [true, "true"],
]);

console.log(mapData);
// Converting Objects to Map
// console.log(Object.entries(restaurant)); //This will console an array consisting multiple array where first index is key and second index is value
const convertedObj = new Map(Object.entries(restaurant));
console.log(convertedObj);

// Converting map to array
const convertedArray = [...convertedObj];
console.log(convertedArray);
