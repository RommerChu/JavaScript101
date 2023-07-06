'use strict';

//-----------Player
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
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

//-----------Buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting Conditions
// score0El.textContent = 0;
// score1El.textContent = 0;
// currentScore0El.textContent = 0;
// currentScore1El.textContent = 0;
// diceEl.classList.add('hidden');

// const scores = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;
// let playing = true;

//Switch player function
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

//Scoping
let scores, currentScore, activePlayer, playing;

//Reset game function
const reset = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  diceEl.classList.add('hidden');

  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');

  //playing = true;
};
reset(); // Call the function

const winner = function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--winner');
};

// console.log(btnNew, btnHold, btnRoll);

//-----------Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //--------Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //--------Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // Check for rolled dice
    if (dice !== 1) {
      //Add dice for current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }

  //--------Check for rolled dice 1: If true switch to next player
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //Add current score to active player
    scores[activePlayer] += currentScore;
    //console.log(scores[activePlayer]);
    //score[1]  = score[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //Check if player score >=100
    //Switch player
    if (scores[activePlayer] >= 20) {
      //Finish game
      playing = false;
      diceEl.classList.add('hidden');
      //   document
      //     .querySelector(`.player--${activePlayer}`)
      //     .classList.add('player--winner');
      winner();
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', reset);
