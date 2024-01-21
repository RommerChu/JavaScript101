'use strict';
//----------------BIND method
console.log('Bind Method');

const flightData = [583, 'Rommer Chu'];
book.apply(cathay, flightData);
console.log(cathay);

book.call(cathay, ...flightData);

const bookCA = book.bind(cathay);
const bookPH = book.bind(philsky);
const bookAS = book.bind(arabsky);
bookCA(23, 'Peter John');

const bookCA23 = book.bind(cathay, 23);
bookCA23('Corazon Chu');
bookCA23('Abigail Chu');

//With Event Listener
cathay.planes == 300;
cathay.buyPlane = function () {
  console.log(this); //<button class="buy">Buy new plane 🛩</button>
  this.planes++;
  console.log(this.planes); //Nan
};

cathay.buyPlane();

document.querySelector('.buy').addEventListener('click', cathay.buyPlane);
