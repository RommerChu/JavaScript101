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

// Greeting function
// Longer version of code
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

//----------Shorter version of code using arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

//short code verision
greet('Hello!')('Rommer');
greet('Hello!')('Peter John');

// long code version
const greeterHey = greet('Hi');
greeterHey('Rommer');
greeterHey('Corazon');

// Airline booking sample
//The call and apply Methods
const lufthansa = {
  airline: 'Lufthansa',
  iaCode: 'LH',
  bookingsArr: [],
  bookings(flightNum, name) {
    console.log(
      `${name} booked a set on ${this.airline}, flight ${this.iaCode}${flightNum}`
    );
    this.bookingsArr.push({ flight: `${this.iaCode}${flightNum}`.name });
  },
};
console.log('-----------------------');
console.log(lufthansa);

lufthansa.bookings(239, 'Rommer Chu');
lufthansa.bookings(240, 'Corazon Chu');
lufthansa.bookings(260, 'Peter Chu');

//CALL method
const eurowings = {
  airline: 'Eurowings',
  iaCode: 'EW',
  bookingsArr: [],
};

const book = lufthansa.bookings;

//This will not work because of "this" is only pointing to Lufthanza
//book( 23, 'Peter John' );

//Solution? use 'CALL' method

const philsky = {
  airline: 'Philsky',
  iaCode: 'PR',
  bookingsArr: [],
};

const arabsky = {
  airline: 'ArabSky',
  iaCode: 'AS',
  bookingsArr: [],
};

const cathay = {
  airline: 'Cathay Pacific',
  iaCode: 'CA',
  bookingsArr: [],
};

book.call(eurowings, 23, 'Peter John');
console.log(eurowings);

//const book1 = lufthansa.bookings;
book.call(philsky, 55, 'Rommer and Peter');
console.log(philsky);

//const book2 = lufthansa.bookings;
book.call(arabsky, 75, 'Jose Santos');
console.log(arabsky);

//const book3 = lufthansa.bookings;
book.call(cathay, 707, 'Peter John Chu');
console.log(cathay);

book.call(arabsky, ...flight);
book.call(philsky, ...flight);

//old method style
//book.apply(philsky, flightNum);

console.log(philsky);
