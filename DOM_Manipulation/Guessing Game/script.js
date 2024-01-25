let data = localStorage.getItem("NumbersRange");
let numOne = "";
let numTwo = "";

let dataArray = JSON.parse(data);

dataArray.map((item) => {
  numOne = item.min;
  numTwo = item.max;
});

console.log(numOne);
console.log(numTwo);

document.querySelector(".between").textContent = `(Between ${numOne} and ${numTwo})`;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let secretNumber = getRandomNumber(Number(numOne), Number(numTwo));
console.log(secretNumber);

console.log(numOne);
console.log(numTwo);

// document.querySelector(".number").textContent = secretNumber;


let highScore = 0;


document.querySelector(".check").addEventListener("click", function () {
  console.log(secretNumber);
  const guess = Number(document.querySelector(".guess").value);

  let score = document.querySelector(".score").textContent;

  if (!guess) {
    document.querySelector(".message").textContent = "No number";
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "Correct Number";
    document.body.style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    highScore = document.querySelector(".highscore").textContent;
    if (highScore == 0) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    } else if (highScore < score) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    document.body.style.backgroundColor = "#fc3636";
    if (score > 0) {
      document.querySelector(".message").textContent =
        "Guess too " + (guess > secretNumber ? "high" : "low");
      score = score - 1;
      document.querySelector(".score").innerHTML = score;
    } else {
      document.querySelector(".message").textContent = "Oops! You lost";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = getRandomNumber(numOne, numTwo);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess").value = " ";
  document.querySelector(".message").textContent = "Start guessing...";
  document.body.style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
