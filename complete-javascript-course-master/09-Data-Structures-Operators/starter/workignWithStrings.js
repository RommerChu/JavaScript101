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
// indexOf()
console.log(airline.indexOf('P')); // 2
console.log(airline.indexOf('philippines')); // -1
// lastIndexOf()
console.log(airline.lastIndexOf('i')); // 15
// slice()
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
  // toUpper()
  const passengerCorrect = passengerLower[0].toUpperCase(); //R
  // slice()
  console.log(passengerCorrect + passengerLower.slice(1)); //Rommer
};
test('cORzOn');
test('PEtEr');
test('rOmMEr');

//Trim Email and remove whitespaces
const email = 'hello@gmail.com';
console.log(email);
// toLower()
const loginEmail = ' Hello@gmail.com \n';
const lowerEmail = loginEmail.toLowerCase();
console.log(lowerEmail); // hello@gmail.com
// trim()
const trimEmail = loginEmail.trim();
console.log(trimEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log('Normalized: ', normalizedEmail);
console.log(email === normalizedEmail);

//Replacing
console.log('-----Replacing-----');
const priceGB = '288,97E';
const priceUS = priceGB.replace('E', '$'); // rpelaces the currency with US dollar
console.log(priceUS);
// replace()
// replaceAll()
const announcement =
  'All passengers come to boarding door 23, Borading door 23';
console.log('replace -->', announcement.replace('door', 'gate')); // raplace function
console.log('replaceAll -->', announcement.replaceAll('door', 'gate')); // new ES6 replaceAll function

//Regualr Expression
console.log('regular expression -->', announcement.replace(/door/g, 'gate'));

//Boolean
// includes()
const planes = 'Airbus A320neo';
console.log(planes.includes('A320')); // true
console.log(planes.includes('Beoing')); // false
console.log(planes.includes('A320')); // true
// startswith()
console.log(planes.startsWith('A')); // true
console.log(planes.startsWith('Air')); // true

if (planes.startsWith('Airbus') && planes.endsWith('neo')) {
  console.log(`${planes} is part of the new iarline family`);
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed to board the plane');
  } else {
    console.log('Welcome aboard');
  }
};

// Using static
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun');
checkBaggage('have my pet');

// using prompt -------------------------------------------------------
//checkBaggage(prompt('Please enter your items in your baggage: '));

// split() function -> store in an ARRAY
console.log('a+very+merry+christmas'.split('+')); // ['a', 'very', 'merry', 'christmas']
console.log('Rommer Chu'.split(' '));

const [firstName, lastname] = 'Rommer Chu'.split(' ');
//console.log(firstName, lastname);

// join() function
const newName = ['Mr.', firstName, lastname.toUpperCase()].join(' ');
console.log(newName);

// function of slipping, uppercase and joining in the new variable
const capitalizedName = function (name) {
  const names = name.split(' ');
  const nameUpper = [];

  for (const n of names) {
    //console.log(n);
    //nameUpper.push(n[0].toUpperCase() + n.slice(1));
    nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameUpper.join(' '));
  //console.log(names);
};
capitalizedName('rommer and corazon Chu');

// .padding() -> to add padding and character
const message = 'Please go to the gate 23';
console.log(message.padStart(40, '+'));
console.log(message.padEnd(40, '+'));

// masking credit card number
const maskCreditCard = function (card) {
  const str = card + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
//const card = "0123-4567-8910-1112"
console.log(maskCreditCard(1234567890));

//Repeating
const mm = 'Bad weather.... All departures are delayed....';
console.log(mm.repeat(5));

//Repeating with emoji
const p = function (n) {
  console.log(`There are ${n} planes lined up ${'✈️'.repeat(n)}`);
};
p(5);
