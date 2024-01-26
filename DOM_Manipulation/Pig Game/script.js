'use strict';

const scoreDisplay0 = document.getElementById('score--0');
const scoreDisplay1 = document.getElementById('score--1');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');
const currentScoreDisplay = document.querySelector('.current-score');

// For CSS Manipulation
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

scoreDisplay0.textContent = 0;
scoreDisplay1.textContent = 0;

let mainScoreOne = 0;
let mainScoreTwo = 0;
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function () {
  // Generating a random dice
  const diceScore = Math.floor(Math.random() * 6 + 1);

  dice.classList.remove('hidden');

  dice.src = `./assets/images/dice-${diceScore}.png`;

  if (diceScore !== 1) {
    currentScore = currentScore + diceScore;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    toggleClasses();
  }
});

btnHold.addEventListener('click', function () {
  if (activePlayer === 0) {
    mainScoreOne = mainScoreOne + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      mainScoreOne;

    if (mainScoreOne >= 100) {
      alert('Player One Wins');
    }

    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = 1;
    toggleClasses();
  } else {
    mainScoreTwo = mainScoreTwo + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      mainScoreTwo;

    if (mainScoreTwo >= 100) {
      alert('Player Two Wins');
    }

    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = 0;
    toggleClasses();
  }
});

btnNew.addEventListener('click', function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  mainScoreOne = 0;
  mainScoreTwo = 2;
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  activePlayer = 0;
  dice.classList.add('hidden');
});

function toggleClasses() {
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}
