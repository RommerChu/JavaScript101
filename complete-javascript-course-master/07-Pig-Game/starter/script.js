'use strict';

//-----------Player
const playerName0El = document.getElementById('name--0');
const playerName1El = document.getElementById('name--1');

//-----------Score
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

//-----------Current Score
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');

//-----------Dice Image
const diceEl = document.querySelector('.dice');

//Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
currentScore0El.textContent = 0;
currentScore1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

//-----------Buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// console.log(btnNew, btnHold, btnRoll);

//-----------Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //--------Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  diceEl.classList.remove('hidden');
  //--------Display Dice
  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    currentScore0El.textContent = currentScore; // Change later
  } else {
    //switch to next player
    playerName1El.classList.add('player--active');
    playerName0El.classList.remove('player-active');
  }

  //--------Check for rolled dice 1: If true switch to next player
});
