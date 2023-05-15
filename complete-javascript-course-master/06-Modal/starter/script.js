'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//onClick
//Get all buttons have the same class show-modal
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
  //console.log('test');
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//On-Keydown
document.addEventListener('keydown', function (e) {
  //console.log( e );
  console.log(e.key);
  //IF ESCAPE IS PRESS, MODAL IS CLOSED
  //   if (e.key === 'Escape') {
  //     //console.log('Escape was pressed');
  //     if (!modal.classList.contains('hidden')) {
  //       closeModal();
  //     }
  //   }

  //SIMPLIFY
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
