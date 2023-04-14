console.log( "----------Assignment----------" )
/*

//Assignment #1
console.log( "----------Assignment----------" )
let country = 'Philippines';
let continent = 'Asia';
let population = 1500000;
console.log( country + " " + continent + " " + population );

//Data Types
let isIsland = country == "Philippines";
let language;
console.log( isIsland, population, country, language )

//Data type
language = "Tagalog";
const officialLang = language;
language = "English";

console.log( officialLang );

//-----------------Coding Challenge #1
//Formula 1
// BMI = mass / height ** 2

//Formula 2
// BMI = mass / (height * height) (mass in kg and height in meter)

//Case1
// Mark > weigth 78, height 1.69
// John > weight 92, height 1.95

//Case 2
// Mark > weight 95, height 1.88
// John > weight 85, height 1.76

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

let bmiMark = massMark / heightMark ** 2;
let bmiJohn = massJohn / ( heightJohn * heightJohn );

console.log( bmiMark, bmiJohn )

markHigherBMI = bmiMark > bmiJohn
console.log( markHigherBMI )

//Coding Challenge #2
if ( bmiMark > bmiJohn ) {
    console.log( `Marks's BMI(${bmiMark}) is higher that John's BMI(${bmiJohn})!` );
    console.log( `Marks's BMI(${Math.floor( bmiMark )}) is higher that John's BMI(${Math.floor( bmiJohn )})!` )
} else {
    console.log( `John's BMI(${bmiJohn}) is higher that Marks's BMI(${bmiMark})!` );
    console.log( `John's BMI(${Math.floor( bmiJohn )}) is higher that Marks's BMI(${Math.floor( bmiMark )})!` )
}
*/

/*
//-----------------Coding Challenge #2


// let dolphins = { 'x': 96, 'y': 108, 'z': 89 }
// let koalas = { 'x': 88, 'y': 91, 'z': 110 }
// let competition = 3;

//let dolphins = ( 96 + 108 + 89 ) / 3;
//let koalas = ( 88 + 91 + 110 ) / 3;

//Data 1 -  Calculate the average score for each team, using the test data below - Dolphins Win
// const minSCore = 100;
// const dolphins = ( 96 + 108 + 89 ) / 3;
// const koalas = ( 88 + 91 + 110 ) / 3;
// console.log( "Dolphins Score Average: " + dolphins );
// console.log( "Koalas Score Average: " + koalas );
// console.log( dolphins, koalas );

//Data - Bonus 1 - Koala Wins
// const minSCore = 100;
// const dolphins = ( 97 + 112 + 101 ) / 3;
// const koalas = ( 109 + 95 + 123 ) / 3;
// console.log( "Dolphins Score Average: " + dolphins );
// console.log( "Koalas Score Average: " + koalas );
// console.log( dolphins, koalas );
// if ( dolphins > koalas && dolphins >= minSCore ) {
//     console.log( "Dolphins win the game " + dolphins );
// } else if ( koalas > dolphins && koalas >= minSCore ) {
//     console.log( "Koalas win the game " + koalas )
// } else {
//     console.log( "They are tie" )
// }

//Data - Bonus 2 - They are tie
const minSCore = 100;
const dolphins = ( 97 + 112 + 101 ) / 3;
const koalas = ( 109 + 95 + 106 ) / 3;
console.log( "Dolphins Score Average: " + dolphins );
console.log( "Koalas Score Average: " + koalas );
console.log( dolphins, koalas );
if ( dolphins > koalas && dolphins >= minSCore ) {
    console.log( "Dolphins win the game " + dolphins );
} else if ( koalas > dolphins && koalas >= minSCore ) {
    console.log( "Koalas win the game " + koalas )
} else if (
    dolphins === koalas &&
    dolphins >= minSCore &&
    koalas >= minSCore
) {
    console.log( "They are tie" )
} else {
    console.log( "No winner" )
}

*/
