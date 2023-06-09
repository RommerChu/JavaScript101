'use strict';

/*
//selecting element
console.log(document.querySelector('.message').textContent);

//
document.querySelector('.message').textContent = '✔️ Correct Number';

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//Number generator
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//console.log(number);
let score = 20;
let highSCore = 0;
//document.querySelector('.number').textContent = secretNumber;

//Click button function
document.querySelector('.check').addEventListener('click', function () {
  //save in variable and convert string to Number
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //   const highSCore = Number(document.querySelector('.highscore').value);
  //   console.log(highSCore, typeof highSCore);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No number';

    //When player wins background color == green
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '✔️ Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '20rem';
    //document.querySelector( '.highscore' ).textContent = score;
    if (score > highSCore) {
      highSCore = score;
      document.querySelector('.highscore').textContent = highSCore;
    }

    //When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🔆 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('body').style.backgroundColor = '#880808';
      document.querySelector('.message').textContent = '❗ You Lost The Game';
      document.querySelector('.score').textContent = 0;
      //document.querySelector('.highscore').textContent = score;
    }

    //When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🤡 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('body').style.backgroundColor = '#880808';
      document.querySelector('.message').textContent = '❗ You Lost The Game';
      document.querySelector('.score').textContent = 0;
      //document.querySelector('.highscore').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.number').style.width = '15rem';

  //highSCore = highSCore;
  //   document.querySelector('.highscore').textContent = highSCore;
});
