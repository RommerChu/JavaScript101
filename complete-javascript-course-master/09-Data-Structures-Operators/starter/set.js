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

console.log(new Set('Peter'));
//Length of orderSet
console.log(orderSets.size);

//Return true -> if present
console.log(orderSets.has('Pizza'));
console.log(orderSets.has('Bread'));

//Add to to OrderSet
console.log(orderSets.has('Rommer'), 'xxxxx');

//Not counted for duplicate
orderSets.add('Garlic Bread');
orderSets.add('Garlic Bread');
console.log(orderSets);

//Delete an item from orderSet
orderSets.delete('Garlic Bread');
console.log(orderSets);
console.log(orderSets[1]); //undefined - no index

//Looping
const orderType = 'Order Type: ';
for (const order of orderSets) console.log(orderType, order);

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Botler', 'Manager', 'Waiter'];
console.log(staff);

//Assigning and storing SET to a new Array
console.log('----Passing staff to a new set----');

const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Botler', 'Manager', 'Waiter']).size
);

const staffUnique2 = new Set(staff);
console.log(staffUnique2);

//String is iterable
console.log(new Set('RommerOrquizaChu'));
console.log(new Set('RommerOrquizaChu').size);
