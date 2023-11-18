'use strict';
console.log('--------------------LOOPING ARRAYS: FOR LOOP--------------------');

const menus = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Traditional For loop
//for (let i = 0; i < menus.length; i++) console.log(menus[i]);

//Simple for loop without index
for (const item of menus) console.log(item);
console.log(
  '--------------------Destructuring using Template Literal--------------------'
);
// Foor loop with index using entries()
for (const item of menus.entries()) {
  //console.log(item);
  console.log(`${item[0] + 1}: ${item[1]}`);
}
console.log(
  '--------------------Destructuring using Variable in Array--------------------'
);
for (const [i, el] of menus.entries()) {
  //console.log(item);
  console.log(`${i + 1}: ${el}`);
}

console.log([...menu.entries()]);

console.log(
  '--------------------LOOPING ARRAYS: Object keys--------------------'
);

//Property names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open ${properties.length} `;

for (const day of properties) {
  //console.log(day);
  openStr += `${day}, `;
}
console.log(openStr);

console.log(
  '--------------------LOOPING ARRAYS: Object values--------------------'
);

//Property Values
const values = Object.values(openingHours);
console.log(values); // Returns the VALUES ONLY of object variable

console.log(
  '--------------------LOOPING ARRAYS: Object Entries--------------------'
);

//Property entries (variable and value)...
const entries = Object.entries(openingHours);
console.log(entries); // Returns the object VARIABLE && object VALUES

//Key, Value
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we are open at ${open} and closed on ${close}`);
}
