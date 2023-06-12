let age = 30;
let oldage = age;
age = 32;
console.log(age);
console.log(oldage); // not affected by mutation of age value

const me = {
  name: 'Rommer',
  age: 35,
  gender: 'male',
  family: ['dad', 'mom', 'son', 'daughter'],
};
console.log('Me:', me);

const friend = me;
friend.age = 20;
friend.name = 'Bruno';
friend.gender = 'Him';

//Copying object -- Use Object.assign()
//Object.assign() -> push will add to all objects
const friend2 = Object.assign({}, friend);
friend2.gender = 'She is a beauty';
friend2.family.push('dogs'); // This will add to all objects referenced and not separately

console.log('Friend:', friend);
console.log('Friend2:', friend2);
