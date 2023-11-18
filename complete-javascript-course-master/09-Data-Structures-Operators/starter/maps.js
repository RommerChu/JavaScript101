'use strict';
console.log('--------------------MAPS--------------------');

const rest = new Map();
rest.set('name', 'Rommer Chu');
rest.set(1, 'Feeding');
rest.set(2, 'Frenzie');
console.log(rest.set(3, 'Fried Fish'));

rest.set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']);
rest.set('open', 11);
rest.set('close', 23);
rest.set(true, 'We are open ;)');
rest.set(false, 'We are closed :(');

console.log(rest.get('name'));
//console.log(rest.get(true));
console.log(rest.get(1), rest.get(2));

const time = 21;
console.log(
  rest.get(time > rest.get('open') && time < rest.get('close'))
  // ? rest.get(true)
  // : rest.get('close')
);

console.log(rest.has('Categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);

const arrz = [1, 2];
rest.set(document.querySelector('h1'), 'Heading');
rest.set(arrz, 'Test123');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arrz));

//Map Arrays of arrays
const questions = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  [true, 'Correct'],
  [false, 'Try again'],
]);
console.log(questions);

console.log(Object.entries(openingHours));
