'use strict';

console.log('--------------------SETS--------------------');

const orderSet = new Set([
  'Pizza',
  'Pizza',
  'Paster',
  'Risotto',
  'Chedar',
  'Pasta',
  'Chedar',
]);
console.log(orderSet);
console.log(new Set('Rommer'));
//Length of orderSet
console.log(orderSet.size);
//Return true -> if present
console.log(orderSet.has('Pizza'));
//Return false -> not present
console.log(orderSet.has('Bread'));
//Add to to OrderSet
orderSet.add('Garlic Bread');
//Not counted for duplicate
orderSet.add('Garlic Bread');

console.log(orderSet);

//Delete an item from orderSet
orderSet.delete('Risotto');

//Clear set
//orderSet.clear();
console.log(orderSet);

//Looping
for (const order of orderSet) console.log(order);

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
