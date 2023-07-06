'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//ES6 Enhancement Object Literal
const hours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //ES6 Enhancement Object Literal REFERENCING from HOURS object
  openingHours: hours,
  //Adding function to the object
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //Adding function to the object
  orderDelivery: function ({ starterIndex, mainIndex, address, time }) {
    console.log(
      `Order of ${this.starterMenu[starterIndex]} 
      and ${this.mainMenu[mainIndex]} 
      will be delivered to ${address} at ${time}`
    );
  },

  //Adding prompt function
  orderIngredients: function (ing1, ing2, ing3) {
    return ing1, ing2, ing3;
  },

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log('mainIngredients:', mainIngredients);
    console.log('otherIngredients:', otherIngredients);
  },
};

//Order Pizza function
restaurant.orderPizza('Mozerella', 'Olives', 'Mushrooms', 'Spinach');
restaurant.orderPizza('Pepperoni');

//OrderIngredients
const ingredients = [
  // prompt("Let's make pizza ingredient1"),
  // prompt('ingredient2'),
  // prompt('ingredient3'),
];
console.log('Ingredients are: ', ingredients);
restaurant.orderIngredients(...ingredients);

//OrderDelivery
restaurant.orderDelivery({
  time: '5:00pm',
  address: '555 street ave., torontos',
  mainIndex: 2,
  starterIndex: 2,
});

console.log(restaurant.orderDelivery);

//----------------
const { name, openingHours, starterMenu } = restaurant;
console.log('test: ', name, openingHours, starterMenu);

//Setting a new DEFAULT VALUE adding []
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log('Menus:', menu, starters);

//----------------Traditional Destructuring
const arr = [2, 3, 4];
const a = arr[0]; // Traditional destructuring NOT RECOMMENDED!
const b = arr[1];
const c = arr[2];
//console.log(a, b, c);

const [x, y, z] = arr; // Destructuring method by defining []
//console.log('test', x, y, z);

const [first, second] = restaurant.categories;
//console.log(first, second); // Italian, Pizzeria

//----------------Switching variables
let [main, secondary] = restaurant.categories;
//console.log(main, secondary); // Italian, Pizzeria

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//The right way to invert destructuring
[main, secondary] = [secondary, main];
//console.log(main, secondary);

//Arrays pulled from Restaurant
console.log(restaurant.order(2, 2));

//Destructure
//Received 2 return values from the ORDER function
const [starter, mainCourse] = restaurant.order(2, 2);
console.log(starter, mainCourse);

// Nested Destructuring
const nested = [2, 4, [6, 8]];
console.log(nested);
const [k, , [m, n]] = nested;
console.log('skipping: ', k, m, n); //2,6,8 --- skipping 4

//Setting default value (if not existing)
const [p = 1, q = 1, r = 1] = [8, 9];
console.log('Setting Default:', p, q, r);

//Mutating variables
let g = 222;
let h = 333;
const obj = { g: 200, h: 300, c: 400 };
//Curly braces will generate error
// Wrap it with brackets important!
({ g, h } = obj);
console.log('Mutating variable object: ', g, h);

//-----------------Extracttion of Satruday opening of restaurant from object
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

//-----------------Extracttion of Satruday opening of restaurant from object
//Reassigning object to new variable
const {
  sat: { open: o, close: d },
} = openingHours;
console.log(o, d);

//Spread operator
const arrOrg = [7, 8, 9];
const badArr = [1, 2, arrOrg[0], arrOrg[1], arrOrg[2]]; //Bad
console.log(badArr);

//Correct and simplified spread of Array
const goodArr = [7, 8, 9];
const newGoodArr = [1, 2, ...goodArr];
console.log(newGoodArr); // Showing objects in array format
console.log(...newGoodArr); // Extracted from array

const newMenu = [...restaurant.mainMenu, 'Granola'];
console.log(...newMenu);

const mainNewMenuCopy = [...restaurant.mainMenu];
console.log(mainNewMenuCopy);
console.log(...mainNewMenuCopy);

//Join 2 arrays
const menu123 = [...restaurant.starterMenu, ...restaurant.mainMenu];
const menu456 = ['salad', 'pizza', ...menu123];
console.log(menu456);
console.log(...menu456);

//Iterations: arrays, string, maps, sets. NOT WITH OBJECTS
const myName = 'Rommer';
const iterate = [...myName, ' ', 'Chu'];
console.log(iterate);
console.log(...iterate);
console.log(`${iterate}`);

//Object
const newRes = { foundedIn: 1998, ...restaurant, founder: 'Rommer' };
console.log(newRes);

const newResCopy = { ...restaurant };
newResCopy.name = 'Rommers Restaurant';
newResCopy.location = '2 Goldgate Cres, Orangeville, ON L9W4B5';
console.log(newResCopy.name, newResCopy.location);
console.log(restaurant.name);

//REST, because on LEFT side of =
const [l, f, j, ...other] = [1, 2, 3, 4, 5];
console.log(l, f, j, other);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//Functions
const add = function (...number) {
  //console.log(number);
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += number[i];
  }
  console.log(sum);
};
add(2, 5); //7
add(4, 5, 6, 7); //22
add(1, 8, 9, 4, 3, 6, 5); //36

const xyz = [2, 3, 4, 5, 6, 7]; //27
add(...xyz);
