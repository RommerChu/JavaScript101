//Coding Challenge #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipsies = []; // Array of Tips
const totales = []; // Array of totals

const calcTips = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}


for (let b = 0; b < bills.length; b++) {

    //console.log(bills[b]);// bills
    tipsies.push((calcTips(bills[b])));// tips
    totales.push(tipsies[b] + bills[b])// tips + bills
}
console.log(bills);
console.log(tipsies);
console.log(totales);

// function calcAverage(arr) {

//     for (let x = 0; x < bills.length; x++) {
//         arr = bills[x] + bills[x][x].length;

//         console.log(calcAverage(bills))
//     }

// }