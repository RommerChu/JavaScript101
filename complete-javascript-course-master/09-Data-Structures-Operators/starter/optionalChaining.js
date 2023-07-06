'use strict';
console.log('--------------------OPTIONAL CHAINING--------------------');

//Will NOT return -> mon -> open does not exist
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

//With optional chaining add '?'
//Undefined will return NOT ERROR
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

console.log('--------------------Sample--------------------');
//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
//console.log(days);
for (const day of days) {
  //console.log(i);
  //Use coelacing instead of || to bring the original state
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we are open at ${open}`);
}

//Method
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); //Return Focaccia, Pasta
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist'); // Method does not exist

//Arrays
const users = [
  { fname: 'Rommer', email: 'rommer.chu@gmail.com', bday: 'July 5, 1972' },
];
console.log(users[0]?.fname ?? 'Users is empty');

//Traditional
if (users.length > 0) {
  console.log(users[0]?.email);
} else {
  console.log('Users is empty');
}
//Ternary operator
users.length > 0 ? console.log(users[0]?.bday) : console.log('Users empty');
