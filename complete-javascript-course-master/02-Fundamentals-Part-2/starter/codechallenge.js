//Coding Challenge #4
const bills = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52 ];
const tipsies = []; // Array of Tips
const totales = []; // Array of totals

const calcTips = function ( bill ) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

console.log(
    calcTips( bills[ 0 ] ),
    calcTips( bills[ 1 ] ),
    calcTips( bills[ 2 ] ),
    calcTips( bills[ 3 ] ),
    calcTips( bills[ 4 ] ),
    calcTips( bills[ 5 ] ),
    calcTips( bills[ 6 ] ),
    calcTips( bills[ 7 ] ),
    calcTips( bills[ 8 ] ),
    calcTips( bills[ 9 ] ),
)

tipsies.push(
    calcTips( bills[ 0 ] ),
    calcTips( bills[ 1 ] ),
    calcTips( bills[ 2 ] ),
    calcTips( bills[ 3 ] ),
    calcTips( bills[ 4 ] ),
    calcTips( bills[ 5 ] ),
    calcTips( bills[ 6 ] ),
    calcTips( bills[ 7 ] ),
    calcTips( bills[ 8 ] ),
    calcTips( bills[ 9 ] ),
)

console.log( tipsies )

// for ( let b = 0; b <= bills.length; b++ ) {
//     console.log( calcTips[ b ], bills[ b ] );
// }