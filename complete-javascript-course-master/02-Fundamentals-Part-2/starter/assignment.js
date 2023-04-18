'use strict'

// const calcAverage = ( score1, score2, score3 ) => {
//     return ( score1 + score2 + score3 ) / 3
// }

//Set calculation formula
const calcAverage = ( score1, score2, score3 ) => {
    return ( score1 + score2 + score3 ) / 3;
}
//Two teams defined
const teamDolphins = calcAverage( 44, 23, 71 );
const teamKoalas = calcAverage( 65, 54, 49 );

//Function to implement calculation
const checkWinner = function ( avgDolphins, avgKoalas ) {
    if ( avgDolphins >= 2 * avgKoalas ) {
        console.log( `Dolphin wins! (${avgDolphins} vs${avgKoalas})` );
    } else if ( avgKoalas >= 2 * avgDolphins ) {
        console.log( `Koalas wins! (${avgKoalas} vs ${avgDolphins})` );
    } else {
        return "No winner"
    }
}
console.log( checkWinner( teamDolphins, teamKoalas ) );


console.log( "-----------------------------" )


//Solution - CTRL + D to edit a variable all at one instance

const calAverage = ( a, b, c ) => ( a + b + c ) / 3;
//console.log( calAverage( 3, 4, 5 ) );

//Test 1
const scoreDolphins = calAverage( 44, 23, 71 );
const scoreKoalas = calAverage( 65, 54, 49 );
//console.log( scoreDolphins, scoreKoalas );

//Test 2
// const scoreDolphins = calAverage( 85, 54, 41 );
// const scoreKoalas = calAverage( 23, 34, 27 );
// console.log( scoreDolphins, scoreKoalas );

const checkWinners = function ( avgDolphine, avgKoala ) {
    if ( avgDolphine >= 2 * avgKoala ) {
        console.log( `Dolphin wins! (${avgDolphine} vs${avgKoala})` );
    } else if ( avgKoala >= 2 * avgDolphine ) {
        console.log( `Koalas wins! ($${avgKoala} vs ${avgDolphine})` );
    } else {
        console.log( "No team wins" )
    }
}
checkWinners( scoreDolphins, scoreKoalas );