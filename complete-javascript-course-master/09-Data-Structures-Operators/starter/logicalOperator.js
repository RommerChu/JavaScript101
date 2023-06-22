'use strict';
console.log('--------------------LOGICAL OPERATOR--------------------');

console.log('--------------------OR: TRUTY VALUE--------------------');
// Use ANY data type, retur ANY data type, short-circuiting
console.log(3 || 'Rommer'); // 3
console.log('' || 'Rommer'); // ' Rommer '
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(undefined || 0 || '' || 'Hello' || 3); // HELLO is truety and the rest are false

//IF and ELSE ternary operation
//restaurant.numGuest = 0;
const guest1 = restaurant.numGuest ? numGuest : 10;
console.log('Ternary operator: ', guest1);

const guest2 = restaurant.numGuest || 10;
console.log('OR operator: ', guest2);

console.log('--------------------AND: FALSY VALUE--------------------');

console.log(0 && 'Rommer'); // 0
console.log(3 && 'Rommer'); // Rommer
console.log('' && 'Rommer'); // '  '
console.log(true && 0); // 0
console.log(undefined && null); // undefined
console.log(undefined && 0 && '' && 'Hello' && 3); // undefine
//IF and ELSE ternary operation
if (restaurant.orderPizza) {
  restaurant.orderPizza('Mushrooms', 'spinach');
}
//Another way to state expression
restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Spinach');
