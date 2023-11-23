'use strict';

console.log(
  '--------------------Working with the strings PART 1--------------------'
);
console.log(
  '--------------------.slice(): To extract string with the use if slice method--------------------'
);

const airline = 'TAP Air Philippines';
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane[1]); // #
console.log(plane[2]); // 2

console.log(airline.length); // 19
console.log('Philippine Airlines'.length); //19

console.log(airline.indexOf('P')); // 2
console.log(airline.lastIndexOf('i')); // 15
console.log(airline.indexOf('philippines')); // -1

console.log(airline.slice(4)); // Air Philippines
console.log(airline.slice(4, 7)); // Air
console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Philippines
console.log(airline.slice(-2)); // es
console.log(airline.slice(1, -1)); // AP Air Philippine

const checkMiddleSeat = function (seat) {
  //B and E is the middle seat
  const s = seat.slice(-1);

  if (s == 'b' || s == 'e') console.log('You got middle seat');
  else console.log('You got lucky 😃');
};
checkMiddleSeat('1b'); // You got middle seat
checkMiddleSeat('2c'); // You got lucky
checkMiddleSeat('3e'); // You got middle seat
checkMiddleSeat('4a'); // You got middle seat

// To lower and upper case
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capiatlizastion of name
const passenger = 'rOmMer';
const passengerLower = passenger.toLowerCase(); //rommer
const passengerCorrect = passengerLower[0].toUpperCase(); //R
console.log(passengerCorrect + passengerLower.slice(1)); //Rommer

//To write a function to automatically correct the entry
const test = function (passenger) {
  //passenger = passenger.toLowerCase();
  const passengerLower = passenger.toLowerCase(); //rommer
  const passengerCorrect = passengerLower[0].toUpperCase(); //R
  console.log(passengerCorrect + passengerLower.slice(1)); //Rommer
};
test('cORzOn');
test('PEtEr');
test('rOmMEr');

//Trim Email and remove whitespaces
const email = 'hello@gmail.com';
console.log(email);

const loginEmail = ' Hello@gmail.com \n';
const lowerEmail = loginEmail.toLowerCase();
console.log(lowerEmail); // hello@gmail.com

const trimEmail = loginEmail.trim();
console.log(trimEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log('Normalized: ', normalizedEmail);
