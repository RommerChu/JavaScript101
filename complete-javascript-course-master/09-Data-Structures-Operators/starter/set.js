'use strict';

console.log('--------------------SETS--------------------');

const orderSets = new Set([
  'Pizza',
  'Pizza',
  'Paster',
  'Risotto',
  'Chedar',
  'Pasta',
  'Chedar',
]);
console.log(orderSets);
console.log(new Set('Rommer'));
//Length of orderSet
console.log(orderSets.size);
//Return true -> if present
console.log(orderSets.has('Pizza'));
//Return false -> not present
console.log(orderSets.has('Bread'));
//Add to to OrderSet
orderSets.add('Garlic Bread');
//Not counted for duplicate
orderSets.add('Garlic Bread');

console.log(orderSets);

//Delete an item from orderSet
orderSets.delete('Risotto');

//Clear set
//orderSet.clear();
console.log(orderSets);

//Looping
for (const order of orderSets) console.log(order);

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Botler', 'Manager', 'Waiter'];
console.log(staff);

//Assigning and storing SET to a new Array
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
//To count length size of an array -> SIZE method
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Botler', 'Manager', 'Waiter']).size
);

console.log(new Set(staffUnique).size);

console.log(new Set('RommerOrquizaChu').size);
('use strict');

console.log('-------------------Set-------------------');

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Rissoto',
  'Spaghetti',
  'Spaghetti',
]);

console.log(orderSet);
