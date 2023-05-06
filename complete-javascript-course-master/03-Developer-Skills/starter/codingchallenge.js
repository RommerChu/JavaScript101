'use strict';
//Create a function for printForecast which takes array 'arr' ->string
//display a string

//Array of maximum temperatures
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

//String conversion from stackoverflow
// const str = data1.map(function (e) {//
//   return e.toString();
// });
// console.log( str );

//Function Print Forecast
const printForecast = function (arr) {
  let days = 0;
  for (let i = 0; i < arr.length; i++) {
    days++;
    console.log(`${arr[i]}ºC in ${days} days...`);
  }
  console.log(arr);
};

printForecast(data1);
printForecast(data2);
