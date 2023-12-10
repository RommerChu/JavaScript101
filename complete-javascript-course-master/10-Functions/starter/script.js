'use strict';

const bookingsData = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //Placing default values if unavailable

  //ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookingsData.push(booking);
};

createBooking('LM123');
createBooking('PS009', 5);
createBooking('PS009', undefined, 15);
console.log(bookingsData);

console.log('--------------------');

const flight = 'PR123';
const rommer = {
  name: 'Rommer',
  passportNum: 1234567,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'PR567';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passportNum === 1234567) {
    alert('Check in');
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, rommer);
console.log(flight);
console.log(rommer);

console.log('--------------------');

const newPassport = function (person) {
  person.passportNum = Math.trunc(Math.random() * 100000);
  //console.log(person.passportNum);
};
newPassport(rommer);
//console.log(rommer);
checkIn(flight, rommer);

console.log('---------Higher Order-----------');

//FIRST FUNCTION
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

//SECOND FUNCTION
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  console.log(first);
  return [first.toUpperCase(), ...others].join(' ');
};

//THIRD FUNCTION -- Higher Order Function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};
transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('🖐️');
};

document.body.addEventListener('click', high5);
['Rommer', 'Cora', 'Peter'].forEach(high5);
