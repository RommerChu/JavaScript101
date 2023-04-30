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

/*

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

*/

/*

console.log( "---------------Coding Challenge #2---------------" )

//Coding Challenge #2 - Array

//const bill = 100;
//const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;

//----------MY SOLUTION
const billst = [ 125, 555, 44 ];

const calcTip = ( bill, tip ) => {
    if ( bill <= 300 && bill >= 50 ) {
        tip = bill * 0.15;
        console.log( `Bill is $${bill} tip is 15% ($${tip}) = $${bill + tip}` );
    } else {
        tip = bill * 0.20;
        console.log( `Bill is $${bill} tip is 20% ($${tip}) = $${bill + tip}` );
    }
}
const bill1 = calcTip( billst[ 0 ] );
const bill2 = calcTip( billst[ 1 ] );
const bill3 = calcTip( billst[ 2 ] );
//OR
const billed = [ calcTip( billst[ 0 ] ), calcTip( billst[ 1 ] ), calcTip( billst[ 2 ] ) ];


*/

/*

//----------SOLUTION FROM CLASS
// Calculation of Tips formulas
const calcTips = function ( bill ) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}
//console.log( calcTips );

const bills = [ 125, 555, 44 ]; //Array of bills
const tips = [ calcTips( bills[ 0 ] ), calcTips( bills[ 1 ] ), calcTips( bills[ 2 ] ) ];
console.log( bills, tips ); //Print Bills and Tips
const total = [ bills[ 0 ] + tips[ 0 ], bills[ 1 ] + tips[ 1 ], bills[ 2 ] + tips[ 2 ] ]
console.log( total );

*/





//-----------------Coding Challenge #3
//const bill = 430;

// const minTip = bill * 0.15;
// const maxTip = bill * 0.20;
// console.log( `Your bill was: $${bill}. Tip: $${bill >= 50 && bill <= 300 ? minTip : maxTip} and the Total value $${bill >= 50 && bill <= 300 ? minTip + bill : maxTip + bill}` )

//const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
// console.log( `Your bill was: $${bill}. Tip: $${tip} and the Total value $${tip + bill}` )


// const mark = {
//     fullname: "Mark",
//     mass: 78,
//     height: 1.69
// };
// const john = {
//     fullname: "John",
//     mass: 92,
//     height: 1.95
// }




//My Solution 1
console.log( "Solution #1 -----------" )
const markBMI = {
    fullname: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi
    }
}

const johnBMI = {
    fullname: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / ( this.height * this.height )
        return this.bmi
    }
}
markBMI.calcBMI();
johnBMI.calcBMI();
console.log( markBMI.bmi, johnBMI.bmi );
console.log( markBMI.calcBMI(), johnBMI.calcBMI() ); // OR

//If - Else Statement
if ( markBMI.bmi > johnBMI.bmi ) {
    console.log( `${markBMI.fullname} (${markBMI.bmi}) is higher than ${johnBMI.fullname} (${johnBMI.bmi})` )
} else if ( johnBMI > markBMI ) {
    console.log()( `${johnBMI.fullname} (${johnBMI.bmi}) is higher than ${markBMI.fullname} (${markBMI.bmi})` )
} else {
    console.log( "Both are the same BMI" )
}

console.log( "Solution #2 -----------" )
//My Solution 2
const bmi = {
    markBMI: {
        fullname: "Mark Miller",
        mass: 78,
        height: 1.69,
        calcBMI: function () {
            this.bmi = this.mass / this.height ** 2;
            return this.bmi
        }
    },
    johnBMI: {
        fullname: "John Smith",
        mass: 92,
        height: 1.95,
        calcBMI: function () {
            this.bmi = this.mass / ( this.height * this.height )
            return this.bmi
        }
    }
}
console.log( `Mark (${bmi.markBMI.calcBMI()}) vs John (${bmi.johnBMI.calcBMI()})` );

//If - Else Statement
if ( bmi.markBMI.bmi > bmi.johnBMI.bmi ) {
    console.log( `${bmi.markBMI.fullname} (${bmi.markBMI.bmi}) is higher than ${bmi.johnBMI.fullname} (${bmi.johnBMI.bmi})` )
} else if ( bmi.johnBMI > bmi.markBMI ) {
    console.log()( `${bmi.johnBMI.fullname} (${bmi.johnBMI.bmi}) is higher than ${bmi.markBMI.fullname} (${bmi.markBMI.bmi})` )
} else {
    console.log( "Both are the same BMI" )
}