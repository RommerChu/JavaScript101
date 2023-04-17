'use strict'; // STRICT MODE DECLARATION - Visible Errors

/*
let hasDriversLic = false;
const passTest = true;

if ( passTest ) hasDriversLic = true;
if ( hasDriversLic ) console.log( "I can drive 🚗" )

const interface = 'Audio'; // Uncaight error result;
*/

/*
//--------------FUNCTION
function logger() {
    console.log( "My name is Rommer" );
}
logger();
logger();
logger();


function fruitProcessor( apple, orange ) {
    //console.log( apple, orange );
    const juice = `Juice with ${apple} apples and ${orange} oranges`;
    return juice;
}

fruitProcessor( 5, 10 );
const appleJuice = fruitProcessor( 5, 10 ); // save in variable to capture all in function block
console.log( appleJuice ); // Execute print on console
//console.log( fruitProcessor( 5, 10 ) ); //same function without using variable

const appleOrangeJuice = fruitProcessor( 2, 4 );
console.log( "AppleOrangeJuice: " + appleOrangeJuice )

//const num = Number( '23' );
//console.log( num )
*/


/*
//----------Function Declaration
//const age1 = calAge1( 1972 );  // Can place the initiazed variable before the function

function calAge1( birthYear ) {
    // const age = 2023 - birthYear;
    // return age;
    return 2023 - birthYear;
}
const age1 = calAge1( 1972 );
console.log( "Rommer's age is " + age1 );
*/


/*
//----------Function Expression
//const age2 = calAge2( 1972 ); // CANNOT initialized before the Expression

const calAge2 = function ( birthYear ) {
    return 2023 - birthYear;
}
const age2 = calAge2( 1972 );
console.log( "Age now is " + age2 )

//Print result from two functions
console.log( age1, age2 )
*/


/*
//-------------------------------my sample
function toy( truck ) {
    const kidsToy = `The toy is a ${truck}`;
    return kidsToy;
}
//maleHuman( corazon );
const thing = toy( 'payloader' );
console.log( thing )
*/


/*
//----------Arrow Function
const calAge3 = function ( birthYear ) { return 2023 - birthYear } //One line of code
console.log( calAge3( 1990 ) )
//
const calAge4 = birthYear => 2023 - birthYear; //One line of code
const calAge5 = calAge4( 1990 )
console.log( calAge4( 1990 ) )
*/


/*
const yearsUntilRetirement = ( birthYear, firstName ) => {

    const age = 2023 - birthYear;
    const retirement = 65 - age;
    const x = `${firstName} retires in ${retirement}`
    return x
}
console.log( "Year of retirement " + yearsUntilRetirement( 1972, "Rommer" ) );
console.log( "Year of retirement " + yearsUntilRetirement( 1980, "Corazon" ) );
*/


/*
//--------------------

function cutPieces( fruit ) {
    return fruit * 4
}

function fruitProcessor( apples, oranges ) {
    const applePieces = cutPieces( apples );
    const orangePieces = cutPieces( oranges );
    //console.log( apple, orange );
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}

console.log( fruitProcessor( 2, 3 ) );
*/

/*
const calAge = function ( birthYear ) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function ( birthYear, firstName ) {
    const age = calAge( birthYear );
    const retirement = 65 - age;

    if ( retirement > 0 ) {
        console.log( `${firstName} retires in ${retirement} years` );
        return retirement;
    } else {
        console.log( `${firstName} retired already` );
        return -1;
    }

    //const x = `${firstName} retires in ${retirement} years`;
    //return retirement;
}
console.log( yearsUntilRetirement( 1991, "Sam" ) );
console.log( yearsUntilRetirement( 1950, "John" ) );
//console.log( "Year of retirement " + yearsUntilRetirement( 1980, "Bob" ) );
*/