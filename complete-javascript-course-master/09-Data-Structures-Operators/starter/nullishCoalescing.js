'use strict';
console.log('--------------------NULLISH COALESCING--------------------');
// Will find a null or undefined variable

restaurant.numGuest = 0;
const guest3 = restaurant.numGuest ?? 10; //If numGuest is not defined then 10 is the nullish
console.log('Nullish coalescing: ', guest3);

//OR assignment operator
const rest1 = {
  name: 'Pizaateria',
  numberGuest: 0,
};

const rest2 = {
  name: 'Mozerellia Italia',
  owner: 'Peter',
};

// rest1.numberGuest = rest1.numberGuest || 50; // return 20
// rest2.numberGuest = rest2.numberGuest || 100; // return 100

//Another way to write the operator base on 2021 ECMA update
// rest1.numberGuest ||= 51; // return 20
// rest2.numberGuest ||= 101; // return 100

//Nullish operator will assign a value to a variable
rest1.numberGuest ??= 51; // return 0
rest2.numberGuest ??= 101; // return 101

// rest1.owner = rest1.owner && 'Ananymous'; // undefined - False + False = False
// rest2.owner = rest2.owner && 'Ananymous'; // Ananymous - True + False = False

//AND assignment operator
rest1.owner &&= 'Ananymous'; // undefined - False + False = False
rest2.owner &&= 'Ananymous'; // Ananymous - True + False = False

console.log(rest1);
console.log(rest2);
