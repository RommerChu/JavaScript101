//Coding Challenge #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipsies = []; // Array of Tips
const totales = []; // Array of totals

const calcTips = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}


for (let b = 0; b < bills.length; b++) {
    //console.log(bills[b]);// bills
    const cb = calcTips(bills[b]);
    tipsies.push(cb);// tips
    totales.push(tipsies[b] + bills[b])// tips + bills
}
console.log(bills);
console.log(tipsies);
console.log(totales);




//----------BONUS CHALLENGE
function calcAverage(arr) {

    let sum = 0;

    for (let x = 0; x < arr.length; x++) {
        //sum = sum + arr[ x ];// OR
        sum += arr[x];
    }

    //console.log( sum )   // Cannot use console after declared value
    return sum / arr.length // use return to print in console
}
//calcAverage( [ 2, 3, 7 ] ) //Test the values

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totales));
console.log(calcAverage(tipsies));
console.log(calcAverage(bills));
