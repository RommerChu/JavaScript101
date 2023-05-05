'use strict';

//DEBUGGING

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    //value: Number(prompt('Degrees celcius')), //ADD convert string to number/parseInt
    value: 10,
  };
  console.log(measurement);
  console.table(measurement); // to show in table
  //   console.log(measurement.value);
  //   console.warn(measurement.value); // To show warning in YELLOW!
  //   console.error(measurement.value); // To show error in RED

  const kelvin = measurement.value + 273; // value is in string if not converted
  return kelvin;
};
console.log(measureKelvin());

const temperatures = [-3, -2, -6, -1, -9, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitudeBug = (t1, t2) => {
  const tempsBug = t1.concat(t2);
  console.log(tempsBug);
  let max = 0; // <-- THIS IS A BUG TO FIX
  let min = 0; //<-- THIS IS A BUG TO FIX

  for (let i = 0; i < tempsBug.length; i++) {
    const currentTemp = tempsBug[i];

    if (typeof currentTemp !== 'number') continue; // Ignore the "Sensor Error" string from array

    //debugger; // To ADD DEBUGGER instead in devtool
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

// calcTempAmplitudeBug([5, 12, 4, 23, 1, -5, -1, 12, 26]);
// const amplitude = calcTempAmplitudeBug(temperatures);

const ampBug = calcTempAmplitudeBug([5, 4, 3, 2, 1], [9, 8, 7, 6]);
console.log(ampBug);
