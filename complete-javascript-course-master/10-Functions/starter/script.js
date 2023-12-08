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
  person.passportNum = Math.trunc(Math.random * 100000);
  //console.log(person.passportNum);
};
newPassport(rommer);
console.log(rommer);
