let btnHam = document.querySelector('#btnHam');
let imgIconHamburger = document.querySelector('#imgIconHamburger');



btnHam.addEventListener('click', changeBtnHamIcon);

function changeBtnHamIcon() {
  if (imgIconHamburger.getAttribute('src') == 'images/icon-hamburger.svg') {
    imgIconHamburger.src = 'images/icon-close.svg';
  } else {
    imgIconHamburger.src = 'images/icon-hamburger.svg';
  }
}
