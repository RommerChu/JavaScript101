'use strict'

console.log( "-------WHILE LOOP-------" );

// for ( let rep = 1; rep <= 10; rep++ ) {
//     console.log( `Lifting weights repetition ${rep}` )
// }

// let reps = 1;
// while ( reps <= 10 ) {
//     console.log( `While - Lifting weights repetition ${reps}` );
//     reps++
// }

// console.log( "-------DICE-------" );
let dice = Math.trunc( Math.random() * 6 ) + 1;
//console.log( dice );

while ( dice !== 6 ) {
    console.log( `You rolled a ${dice}` );
    dice = Math.trunc( Math.random() * 6 ) + 1;
    if ( dice === 6 ) console.log( 'Loop is about to end...' );
}