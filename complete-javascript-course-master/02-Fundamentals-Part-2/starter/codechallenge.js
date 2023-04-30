//Coding Challenge #4
const bills = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52 ];
const tipsies = []; // Array of Tips
const totales = []; // Array of totals

const calcTips = function ( bill ) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

for ( let b = 0; b <= bills.length; b++ ) {



    console.log( calcTips[ b ], bills[ b ] );

}