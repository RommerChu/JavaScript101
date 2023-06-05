'use strict';

function calAge(birthyear) {
  const age = 2023 - birthyear;

  function printAge() {
    let output = `${fName} You are ${age}, born in ${birthyear}`;
    console.log(output);

    if (birthyear >= 1981 && birthyear <= 1996) {
      var millenial = true; // Using VAR will convert to global variable

      //Reassignment of variable
      const fName = 'Surefire';
      output = 'NEW OUT PUT';

      const str = `You are a millenial ${fName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // else {
    //   console.log(`You are not a millenial ${fName} age ${age}`);
    // }
    console.log(millenial);
    //console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}

const fName = 'Rommer';
calAge(1981);
