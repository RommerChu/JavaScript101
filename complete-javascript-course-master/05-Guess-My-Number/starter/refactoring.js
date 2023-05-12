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
let tooHigh = '';
//Display Message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//Secret Number
const secretNumb = function (secretNumber) {
  document.querySelector('.number').textContent = secretNumber;
};
//Score
const scoreNum = function (score) {
  document.querySelector('.score').textContent = score;
};
//Body Style Color
const bodyStyle = function (body) {
  document.querySelector('body').style.backgroundColor = body;
};

//Click button function
document.querySelector('.check').addEventListener('click', function () {
  //save in variable and convert string to Number
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    displayMessage('🚫 No number');

    //When player wins background color == green
  } else if (guess === secretNumber) {
    secretNumb(secretNumber);
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('✔️ Correct Number');
    bodyStyle('#60b347');
    document.querySelector('.number').style.width = '20rem';
    if (score > highSCore) {
      highSCore = score;
      document.querySelector('.highscore').textContent = highSCore;
    }

    //SHORTER VERSION OF CODE

    //When guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '🔆 Too high' : '🤡 Too low');
      score--; //Ternary code simplified
      scoreNum(score);
      //document.querySelector('.score').textContent = score;
    } else {
      bodyStyle('#880808');
      displayMessage('❗ You Lost The Game');
      scoreNum(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  scoreNum(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  bodyStyle('#222222');
  document.querySelector('.number').style.width = '15rem';
});
