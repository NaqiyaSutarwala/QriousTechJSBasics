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
    console.log(output);            //New Output
    console.log(notBlockedScoped);
  }

  printAge();

  return age;
}

const firstName = "Naqiya";
calcAge(1981);
// console.log(age);    not defined error
// printAge()       not defined error
