// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// Return the output array, and ignore all non-op characters
function parse(data) {
  let commandsArray = data.split("");
  let outputArr = [];
  let current = 0;

  commandsArray.forEach((item) => {
    if (item === "i") current += 1;
    if (item === "d") current -= 1;
    if (item === "s") current = Math.pow(current, 2);
    if (item === "o") outputArr.push(current);
  });

  return outputArr;
}

console.log(parse("iiisdommmmso"));
