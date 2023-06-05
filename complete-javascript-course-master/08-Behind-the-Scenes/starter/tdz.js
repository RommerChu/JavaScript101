'use strict';
//Temporal Dead Zone TDZ

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Rommer';
// let job = 'teacher';
// const year = 1972;

/* 
console.log(addDec(2, 3));
// console.log(addDec2(2, 3));
// console.log(addDec3(2, 3));

//Functions
//Sample1
function addDec(a, b) {
  return a + b;
}
//Smaple2
const addDec2 = function (a, b) {
  return a + b;
};
//Smaple3
var addDec3 = (a, b) => a + b;

//Sample
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All is deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

//This Keyword
const rommer = {
  name: 'Rommer Chu',
  year: 1972,
  calcAge: function () {
    return 2023 - this.year; //Apply this to refere to the const variable
  },
};
console.log(rommer.calcAge()); // 51

console.log(this);

const abc = function (birthyear) {
  console.log(2040 - birthyear);
  console.log(this);
};
//This keyword points to global function and not the object/variable
const abc12 = birthyear => {
  console.log(2040 - birthyear);
  console.log(this);
};

abc(1972);
abc12(1980);

//Object function borrowing
const r = {
  year: 1990,
};

r.calcAge = rommer.calcAge;
r.calcAge();

const f = rommer.calcAge;
f();

*/

var fName = 'Popeye';
//---------------------------
const rommer = {
  fName: 'Rommer Chu',
  year: 1972,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
  greet: () => {
    console.log(this);
    // Point to global not inside the method
    // never ever use this arrow in method
    console.log(`Hey ${this.fName} my`); // Point to global not inside the method
  },
  greet2: function () {
    console.log(`Hey ${this.fName}`); //Rommer
  },
};
console.log(rommer);
rommer.greet();
rommer.greet2();

//---------------------------
//Using THIS with function inside a method vs Arrow function
const rommerChu = {
  fName: 'Rommer Chu',
  year: 1972,
  calcAge: function () {
    console.log('-------');
    console.log(this);
    console.log(2023 - this.year);

    //Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log('-----solution 1 - assign variable SELF to work----');
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    //Solution 2
    //Use arrow function
    const isMillenial = () => {
      console.log('-----solution 1 - assign variable SELF to work----');
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },
};
rommerChu.calcAge();

//---------------------------
//ARgument keyword
const xyz = function (a, b) {
  console.log(arguments);
  return a + b;
  // Regualr function will work all the time
  // except using 'this' keyword pass on variable
};
xyz(5, 10);
xyz(2, 4, 6, 8, 10);

//---------------------------
var addArrow = () => {
  console.log(arguments);
  return a + b;
  // Will return Reference Error
  // Arrow functions will not work
};
addArrow(3, 5, 7);

//---------------------------
const qwerty = function (test, test1) {
  console.log(arguments);
  return test + test1;
};
qwerty(100, 200);
