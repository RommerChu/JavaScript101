/*
let js = 'amazing';
console.log( 54 + 3 - 10 / 2 );

//console.log('Rommer');
// console.log(23);

let firstName = 'Peter';
console.log( firstName + " is " + js );
console.log( firstName );
console.log( firstName );
console.log( firstName );

let person = 'Rommer';
let PI = 3.14;

console.log( "His name is ${firstName}" )

let javascriptIsFun = true;
console.log( javascriptIsFun );

// console.log(typeof true);
console.log( typeof javascriptIsFun );

javascriptIsFun = "YES!";
console.log( typeof javascriptIsFun );

let year;
console.log( typeof year );
console.log( year );

year = 1991;
console.log( typeof year );

console.log( typeof null );

//use let for mutation
let age = 30;
age = 31;

// constant declaration without changing is allowed
const birthYear = 1991;

lasName = "Chu"
console.log( lasName );


//Basic Operators
//Math Operators
const now = 2023;

const ageRommer = now - 1972;
const ageCorazon = now - 1971;
console.log( ageRommer, ageCorazon );

console.log( ageRommer * 2, ageRommer / 2, 2 ** 3 );
// 2 ** 3 means 2 to the power of 3 = 2*2*2


const firstName = "Rommer"
const lastName = 'Chu';
console.log( firstName + lastName );
console.log( firstName + " " + lastName );

//Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x += 4; // x = x + 4 = 15 + 10 + 4 = 29
x++;
x--;

console.log( x )

//Comparison operators
console.log( ageRommer < ageCorazon ); // true
console.log( ageRommer >= 51 ); // true

const isFullAge = ageRommer >= 51; //true
console.log( isFullAge ); // true

console.log( now - 1972 > now - 1971 ); //false



const now = 2023;
const ageRommer = now - 1972;
const ageCorazon = now - 1971;
console.log( ageRommer, ageCorazon );
console.log( now - 1972 > now - 1971 )

let x, y;
x = y = 25 + 10 - 5; // 30 30
console.log( x, y );

const averageAge = ( ageRommer + ageCorazon ) / 2;
console.log( ageRommer, ageCorazon, averageAge );


const firstName = "Rommer";
const job = "UX Designer";
const birthday = 1972;
const year = 2023

const rommer = 'I\'m ' + firstName + ', a ' + ( year - birthday ) + ' years old ' + job + '!';
console.log( rommer );

// Template literal -  using backticks can ease the string formation an allow variables to use
const rommerNew = `I'm ${firstName}, a ${year - birthday} year old ${job}!`
console.log( rommerNew )



const age = 15
//const isOldEnough = age >= 18;

//IF ELSE statement
if ( age >= 18 ) {
    console.log( 'Rommer CAN START the project' )
} else {
    const yearleft = 18 - age;
    console.log( `Rommer CANNOT START the project. Wait another ${yearleft} years.` )
};

const birthYear = 1972;
let century;

if ( birthYear <= 2000 ) {
    century = 20;
} else {
    century = 21
}
console.log( century );

*/

//Type Conversions
const inputYear = "1991";
console.log( Number( inputYear ), inputYear )
console.log( Number( inputYear ) + 18 );

console.log( Number( "Rommer" ) );
console.log( typeof NaN );
console.log( String( 23 ), 23 );

//Type Coersion
console.log( 'I am ' + 51 + ' years old' );
console.log( '51' - '50' - 1 );
console.log( '51' / '50' - 1 );
console.log( '51' * '50' + 1 );

let n = "1" + 1;
n = n - 1;
console.log( n )
