'use strict'

//console.log( "Repetition 1" );

//For Loop
// for ( let rep = 1; rep <= 10; rep++ ) {
//     console.log( `Repetition ${rep}` );
// }

//For loop Arrays
const rommer = [
    "Rommer",
    "Chu",
    2023 - 1972,
    "Designer",
    [ "Peter", "John", "Abigail" ],
    true,
    false
];

const type = [];
// console.log( rommer[ 0 ] );
// console.log( rommer[ 1 ] );
// console.log( rommer[ 2 ] );
// console.log( rommer[ 3 ] );
// console.log( rommer[ 4 ] );

console.log( "-------FOR LOOP PUSH TO TYPE WITH DATA TYPE-------" );
for ( let i = 0; i < rommer.length; i++ ) {
    //reading from rommer array
    console.log( rommer[ i ], typeof rommer[ i ] )
    //type[ i ] = typeof rommer[ i ]; // or
    type.push( typeof rommer[ i ] );
}
console.log( type );

//----------------Age Array sample and push to a new ageArray
console.log( "-------FOR LOOP PUSH TO AGE CALCULATIONN RESULT TO AGEARRAY-------" );
const year = [ 1991, 2000, 2010, 2015, 2022 ];
const age = [];

for ( let n = 0; n < year.length; n++ ) [
    age.push( 2023 - year[ n ] )
]
console.log( age );


console.log( "-------ONLY STRING-------" );
//----------------Continue
for ( let i = 0; i < rommer.length; i++ ) {
    if ( typeof rommer[ i ] !== 'string' ) continue; // Continue to strings only
    console.log( rommer[ i ], typeof rommer[ i ] )
}

//----------------Break
console.log( "-------BREAK WITH NUMBERS-------" );
for ( let i = 0; i < rommer.length; i++ ) {
    if ( typeof rommer[ i ] === 'number' ) break; // Break stops at number type
    console.log( rommer[ i ], typeof rommer[ i ] )
}


console.log( "-------FOR LOOP BACKWARDS-------" );
for ( let x = rommer.length - 1; x >= 0; x-- ) {
    // console.log( rommer[ x ], typeof rommer[ x ] )
    console.log( x, rommer[ x ] )

}

console.log( "-------FOR LOOP INSIDE FOR LOOP-------" );
for ( let excercise = 1; excercise < 4; excercise++ ) {
    console.log( `----Starting excercise ${excercise} 🤑` )

    //For loop inside for loop
    for ( let rep = 1; rep < 6; rep++ ) {
        console.log( `Excercise ${excercise}: Lifting weight repetition ${rep} 🏋️` )
    }
}

