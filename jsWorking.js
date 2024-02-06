"use strict";

// let interface = ""

function calcAge(birthyear) {
  const age = 2024 - birthyear;
  // console.log(firstName)

  function printAge() {
    let output = `${firstName},You are ${age}, born in ${birthyear}`;

    console.log(output);

    if (birthyear >= 1981 && birthyear <= 1996) {
      var notBlockedScoped = "var";

      //   Creating new variable with the same name of outerscope is valid
      // and will result the new value
      const firstName = "Shreeya";

      //Reassigning the variable of outer scope
      output = "New Output";

      const str = `Oh ${firstName}, You are a Millenial`;
      //   Oh Shreeya, You are a Millenial
      console.log(str);
    }

    // Value changes for the whole scope when reassigned
    console.log(output); //New Output
    console.log(notBlockedScoped);
  }

  printAge();

  return age;
}

const firstName = "Naqiya";
calcAge(1981);
// console.log(age);    not defined error
// printAge()       not defined error

// This Keyword

console.log(this); //Will point to global window object

// This keyword inside a function will be undefined
const calcAgeThis = function (birthyear) {
  console.log(2037 - birthyear);
  console.log(this); //undefined   //When not is strict mode this keyword inside function will return window object
};

// Simple Object Call
calcAgeThis(1997);

// This keyword in arrow functions

// Arrow functions does not have
// its own this keyword and hence points to its parents scope
const calcAgeThisArrow = (birthyear) => {
  console.log(2023 - birthyear);
  console.log(this); //will return window object coz its parent is global window.
};

calcAgeThisArrow(2002);

// This keyword in objects
const jonas = {
  year: 2002,
  calcAge: function () {
    console.log(this); //Will return the jonas object
    console.log(this.year); //i.e jonas.year
  },
};

const jonasObj = {
  firstName: "Naqiya",
  year: 2002,
  calcAge: function () {
    console.log(this);
    console.log(2002 - this.year);
  },
  greet: () => console.log(`hey ${this.firstName}`), //here this will be pointed to global window object
};

jonasObj.greet();

const addTax = function (rate) {
  return function (value) {
    return value + (value * rate) / 100;
  };
};

const takeValue = addTax(20);
console.log(takeValue(100));

// console.log(addTax(20)(100));

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
};

// Closures
let counter = 0;

function add() {
  let counter = 0;
  counter += 1;
  console.log(counter);
}

// Call add() 3 times
add();
add();
console.log(add());
