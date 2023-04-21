'use strict'

// const calcAverage = ( score1, score2, score3 ) => {
//     return ( score1 + score2 + score3 ) / 3
// }
/*
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
        console.log( "No Winner" );
        //return "No winner"
    }
}
checkWinner( teamDolphins, teamKoalas );

*/

console.log( "-----------------------------" )

/*
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
*/



//My new version of calculation
const calAvg = ( x, y, z ) => ( x + y + z ) / 3;
//console.log( calAvg( 2, 4, 6 ) );

//Data 1
//Change const to let to reassign the variable from Data 1
let teamD1 = calAvg( 44, 23, 71 );
let teamK1 = calAvg( 65, 54, 49 );

//Data 2
//Reassignment of value for Data 2
teamD1 = calAvg( 85, 54, 41 );
teamK1 = calAvg( 23, 34, 27 );

const chkWin = ( avgD, avgK ) => {

    //Data 1
    if ( avgD >= 2 * avgK ) {
        console.log( `Dolphins win! (${avgD} vs ${avgK})` );
    }
    else if ( avgK >= 2 * avgD ) {
        console.log( `Koala win! (${avgK} vs ${avgD})` );
    } else {
        console.log( "No Winner" );
    }

}
console.log( teamD1, teamK1 );


console.log( "---------------Coding Challenge #2---------------" )

//Coding Challenge #2 - Array

//const bill = 100;
//const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;

const bills = [ 125, 555, 44 ];

const total = new Array( 1, 2, 3 );
console.log( total );


const calcTip = ( bill, tip ) => {

    if ( bill <= 300 && bill >= 50 ) {
        tip = bill * 0.15;
        console.log( `Bill is $${bill} tip is 15% ($${tip}) = $${bill + tip}` );
    } else {
        tip = bill * 0.20;
        console.log( `Bill is $${bill} tip is 20% ($${tip}) = $${bill + tip}` );
    }

}
const bill1 = calcTip( bills[ 0 ] );
const bill2 = calcTip( bills[ 1 ] );
const bill3 = calcTip( bills[ 2 ] );









//-----------------Coding Challenge #3
//const bill = 430;

// const minTip = bill * 0.15;
// const maxTip = bill * 0.20;
// console.log( `Your bill was: $${bill}. Tip: $${bill >= 50 && bill <= 300 ? minTip : maxTip} and the Total value $${bill >= 50 && bill <= 300 ? minTip + bill : maxTip + bill}` )

//const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
// console.log( `Your bill was: $${bill}. Tip: $${tip} and the Total value $${tip + bill}` )
