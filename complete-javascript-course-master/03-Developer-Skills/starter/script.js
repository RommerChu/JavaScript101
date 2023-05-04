// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;
if (x === 23) console.log(x);

const v = (birthyear) => 2023 - birthyear;

console.log(v(1972));

//PROBLEM
// We work for the company building a smart home thermometer. Our most recent task is this: "Given an array of temperature of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//1) Understand the problem
// - What is temp amplitude? Anwer: difference between highest and lowest temp
// - How to compute max and min temperature?
// - What is a sensor error? And what to do?

//2) Breaking up into sub-problems
// - How to ignore errors?
// - Find Max value in temp array
// - Find Min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = (temps) => {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== 'number') continue; // Ignore the "Sensor Error" string from array

    if (currentTemp > max) {
      max = currentTemp;
    }
    if (currentTemp < max) {
      min = currentTemp;
    }
  }

  console.log(max, min);
};

//calcTempAmplitude([5, 12, 4, 23, 1, -5]);
calcTempAmplitude(temperatures);
