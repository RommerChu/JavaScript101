'use strict';
//Create a function for printForecast which takes array 'arr' ->string
//display a string

//PROBLEM DISECTION
//Array transformed to string, separate by ...
// wwhat is a X days? => index + 1

//Transform array to string
//Transform each element to string with Celcius
//String need to contain day (index + 1)
//Add ... between elements and start and end of string

//Array of maximum temperatures
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

//----------MY SOLUTION...
//Function Print Forecast
const printForecast1 = function (arr) {
  let days = 0; // Days counter
  for (let i = 0; i < arr.length; i++) {
    days++; // days counts
    console.log(`... ${arr[i]}ºC in ${days} days...`); // <= Wrong, not converted to string...
  }
  console.log(arr); //<= Should not call the arr, its object NOT STRING
};
printForecast1(data1);
printForecast1(data2);

//----------SOLUTION FROM THE CLASS
const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log('...' + str);
};
printForecast(data1);
printForecast(data2);
