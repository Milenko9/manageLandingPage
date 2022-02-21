let btnHam = document.querySelector('#btnHam');
let imgIconHamburger = document.querySelector('#imgIconHamburger');
let anishaBtn = document.querySelector('#anishaBtn');
let aliBtn = document.querySelector('#aliBtn');
let richardBtn = document.querySelector('#richardBtn');
let shanaiBtn = document.querySelector('#shanaiBtn');
let anishaDiv = document.querySelector('.anishaDiv');
let aliDiv = document.querySelector('.aliDiv');
let richardDiv = document.querySelector('.richardDiv');
let shanaiDiv = document.querySelector('.shanaiDiv');



btnHam.addEventListener('click', changeBtnHamIcon);

function changeBtnHamIcon() {
  if (imgIconHamburger.getAttribute('src') == 'images/icon-hamburger.svg') {
    imgIconHamburger.src = 'images/icon-close.svg';
  } else {
    imgIconHamburger.src = 'images/icon-hamburger.svg';
  }
}

anishaBtn.addEventListener('click', changeAnisha);
aliBtn.addEventListener('click', changeAli);
richardBtn.addEventListener('click', changeRichard);
shanaiBtn.addEventListener('click', changeShanai);

function changeAnisha() {
  anishaDiv.classList.remove('customerHide');
  anishaBtn.classList.add('btnCustomerActive');
  aliDiv.classList.add('customerHide');
  richardDiv.classList.add('customerHide');
  shanaiDiv.classList.add('customerHide');
  aliBtn.classList.remove('btnCustomerActive');
  richardBtn.classList.remove('btnCustomerActive');
  shanaiBtn.classList.remove('btnCustomerActive');
}

function changeAli() {
  aliDiv.classList.remove('customerHide');
  aliBtn.classList.add('btnCustomerActive');
  anishaDiv.classList.add('customerHide');
  richardDiv.classList.add('customerHide');
  shanaiDiv.classList.add('customerHide');
  anishaBtn.classList.remove('btnCustomerActive');
  richardBtn.classList.remove('btnCustomerActive');
  shanaiBtn.classList.remove('btnCustomerActive');
}

function changeRichard() {
  richardDiv.classList.remove('customerHide');
  richardBtn.classList.add('btnCustomerActive');
  anishaDiv.classList.add('customerHide');
  aliDiv.classList.add('customerHide');
  shanaiDiv.classList.add('customerHide');
  anishaBtn.classList.remove('btnCustomerActive');
  aliBtn.classList.remove('btnCustomerActive');
  shanaiBtn.classList.remove('btnCustomerActive');
}

function changeShanai() {
  shanaiDiv.classList.remove('customerHide');
  shanaiBtn.classList.add('btnCustomerActive');
  anishaDiv.classList.add('customerHide');
  aliDiv.classList.add('customerHide');
  richardDiv.classList.add('customerHide');
  anishaBtn.classList.remove('btnCustomerActive');
  aliBtn.classList.remove('btnCustomerActive');
  richardBtn.classList.remove('btnCustomerActive');
}


// EMAIL VALIDATION
let email = document.querySelector('#emailInput');
let goBtn = document.querySelector('#goBtn');
let errorEmail = document.querySelector('.errorEmail');
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/


goBtn.addEventListener('click', checkEmail);

function checkEmail(e) {
  e.preventDefault();
  if (email.value.match(pattern)) {
    email.style.border = '2px solid green';
    email.style.color = 'green';
    errorEmail.style.display = 'none';
  } else {
    email.style.border = '2px solid red';
    email.style.color = 'red';
    errorEmail.style.display = 'block';
  }
}
