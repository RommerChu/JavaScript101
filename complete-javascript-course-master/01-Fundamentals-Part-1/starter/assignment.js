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

//Coding Challenge #1
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

const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

let bmiMark = massMark / heightMark ** 2;
let bmiJohn = massJohn / heightJohn ** 2;

console.log( bmiMark, bmiJohn )

markHigherBMI = bmiMark > bmiJohn
console.log( markHigherBMI )