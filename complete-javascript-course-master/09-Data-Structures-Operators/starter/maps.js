'use strict';
console.log('--------------------MAPS--------------------');

const rest = new Map();
rest.set('name', 'Rommer Chu');
rest.set(1, 'Feeding');
rest.set(2, 'Frenzie');
rest.set(3, 'Friend Salami');
console.log(rest.set(4, 'Fishball'));

rest.set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']);
rest.set('open', 11);
rest.set('close', 23);
rest.set(true, 'We are open ;)');
rest.set(false, 'We are closed :(');
console.log(rest.get('name')); // Rommer
console.log(rest.get(1), rest.get(2)); // Feeding Frenzie

//-------reading the map use GET method -->  get()-------
const time = 21;
console.log(
  rest.get(time > rest.get('open') && time < rest.get('close'))
  // ? rest.get(true)
  // : rest.get('close')
); // True --> We are open

console.log(rest.get(time > rest.get('close') && time < rest.get('open'))); // False --> We are close

console.log(rest.has('Categories'), '--> HAS categories');
rest.delete(3);
console.log(rest, '--> Deleted friend salami');
console.log(rest.size, '--> Reset size');
console.log(rest.get([1, 2]), 'gggggggggggggggggggggg');

const arrz = [1, 2];
rest.set(document.querySelector('h1'), 'Heading');
rest.set(arrz, 'Test123');
console.log(rest);
console.log(rest.size, '--> Size');
console.log(rest.get(arrz), 'Get ARRZ');

console.log('---Questions: Map Iterations---');
//Map Arrays of arrays
const questions = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 😃'],
  [false, 'Try again'],
]);
console.log(questions);

console.log('-----Alternative code structure of Map-----');
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(questions.get('question'));
for (const [key, value] of questions) {
  if (typeof key === 'number') {
    console.log(`${key}: ${value}`);
  }
}

// const answer = Number(prompt('Your answer'));
// console.log(questions.get(questions.get('correct') === answer));

// My version
// if (answer === questions.get('correct')) {
//   console.log(`Your answer is ${questions.get(3)}: ${questions.get(true)}`);
// }
// else {
//   console.log(`${questions.get(false)}`);
// }

console.log([...questions]);
console.log(questions.entries());
console.log(questions.keys());
console.log(questions.values());
