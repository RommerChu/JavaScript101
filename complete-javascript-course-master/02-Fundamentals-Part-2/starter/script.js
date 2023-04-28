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


/*

//----------Intro Objects

const rommer = {
    firstName: "Rommer",
    lastName: "Chu",
    age: 2023 - 1972,
    job: "Designer",
    friends: [ "Peter", "John", "Abigail" ]
};
console.log( rommer );
console.log( rommer.lastName );
console.log( rommer[ 'lastName' ] );

const nameKey = 'Name';
console.log( rommer[ 'firstName' ] + nameKey );
console.log( rommer[ 'lastName' ] );

//const intIn = prompt( "What do you want about Rommer? Choose between firstName, lastName, age, job, friends." )
//console.log( intIn );
//console.log( rommer.intIn );// return undefined
//-----> console.log( rommer[ intIn ] );// From const of rommer => intIn will trigger to get the value from the object


//----->IF-ELSE Statement

// if ( rommer[ intIn ] ) {
//     console.log( rommer[ intIn ] );
// } else {
//     console.log( "Wrong request! Choose between firstName, lastName, age, job, friends." )
// }

// rommer.location = "Manila"; //Add location
// rommer[ 'twitter' ] = "@rommerchu";//Add twitter
// console.log( rommer );

//----->Ternary version
//rommer[ intIn ] ? console.log( rommer[ intIn ] ) : console.log( "Wrong request! Choose between firstName, lastName, age, job, friends." )

//----->Challenge
// Rommer haS 3 friends, and his best friends is called Peter
console.log( `${rommer.firstName} has ${rommer.friends.length} friends, and his best friend is called ${rommer.friends[ 0 ]}` )

//----->OR

//rommer[ 'firstName' ] = prompt( "Enter Name" ).toUpperCase( 0 );
//rommer.friends = rommer.friends.length;
//console.log( rommer.firstName + " has " + rommer.friends.length + " friends, and his best friend is called " + rommer.firstName );

*/



const rommer = {
    firstName: "Rommer",
    lastName: "Chu",
    birthYear: 1972,
    job: "Designer",
    friends: [ "Peter", "John", "Abigail" ],
    hasDriverLic: false,

    // calcAge: function ( age ) {
    //     return 2023 - age;
    // }

    //Version 1 => Using THIS
    // calcAge: function () {
    //     //console.log( this );
    //     return 2023 - this.age;
    // }

    //Version 2
    calcAge: function () {
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    //----->Challenge2
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job} has ${this.hasDriverLic ? 'a' : 'NO'} drivers license`
    }
};

console.log( rommer.calcAge() );

console.log( rommer.age );
console.log( rommer.age );
console.log( rommer.age );



//rommer.calcAge( 2000 );
// console.log( rommer.calcAge( 2000 ) ); // Use dot notation
// console.log( rommer[ 'calcAge' ]( 2000 ) ); // Use bracket with string param


//----->Challenge2
//"Rommer is a 51 years old desiger, and he has a driver's license"
//console.log( `${rommer.firstName} is a ${this.age} years old ${rommer.job}, and he has a driverlic ${rommer.hasDriverLic}` )
console.log( rommer.getSummary() );