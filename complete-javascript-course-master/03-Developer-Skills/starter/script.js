// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;
// if (x === 23) console.log(x);

// const v = (birthyear) => 2023 - birthyear;

// console.log(v(1972));

//PROBLEM 1
// We work for the company building a smart home thermometer. Our most recent task is this: "Given an array of temperature of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [-3, -2, -6, -1, -9, 'error', 9, 13, 17, 15, 14, 9, 5];

//1) Understand the problem
// - What is temp amplitude? Anwer: difference between highest and lowest temp
// - How to compute max and min temperature?
// - What is a sensor error? And what to do?

//2) Breaking up into sub-problems
// - How to ignore errors?
// - Find Max value in temp array
// - Find Min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitudeNew = (tempsNew) => {
  let max = tempsNew[0];
  let min = tempsNew[0];

  for (let i = 0; i < tempsNew.length; i++) {
    const currentTemp = tempsNew[i];

    if (typeof currentTemp !== 'number') continue; // Ignore the "Sensor Error" string from array

    if (currentTemp > max) {
      max = currentTemp;
    }
    if (currentTemp < min) {
      min = currentTemp;
    }
  }

  console.log(max, min);
  return max - min;
};

calcTempAmplitudeNew([5, 12, 4, 23, 1, -5, -1, 12, 26]);
const amplitude = calcTempAmplitudeNew(temperatures);
console.log(amplitude);

//PROBLEM 2
//Function should now receive 2 arrays of temps

// 1) Understand the problems
// - with 2 arrays, should we implement functionality twice? NO! just merge two arrays

// 2) Breaking up into sub-problems
// Now merge 2 arrays?

// MDN concat() - combining two arrays
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = arr1.concat(arr2);
// console.log(arr3);

const calcTempAmp = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== 'number') continue; // Ignore the "Sensor Error" string from array

    if (currentTemp > max) {
      max = currentTemp;
    }
    if (currentTemp < min) {
      min = currentTemp;
    }
  }

  console.log(max, min);
  return max - min;
};
const amp = calcTempAmp([10, 9, 8, 7, 6], [5, 4, 3, 2, 1, 0]);
console.log(amp);
//console.log(t1.length + 'test');
