"use strict"

const addReview = document.querySelector('.addReview__btn').addEventListener('click', openWindow);
const cancel = document.querySelector('.addReview__form__sbmCancel').addEventListener('click', closeWindow);
const form = document.querySelector('.addReview__form__sbmAdd').addEventListener('click', validate);
const output = document.querySelector('.output');
const stars = document.querySelectorAll('.ratingStar');
const starsInput = document.querySelector('.stars')
const starsError = document.querySelector('.errorStars')
const nameInput = document.getElementById('addReview__form__name');
const nameError = document.querySelector('.errorName')
const reviewInput = document.getElementById('addReview__form__review')
const reviewError = document.querySelector('.errorReview')


// open window 

function openWindow() {
  output.style.display="flex";  
}

// validation

let errors = 0;

nameInput.onblur = function() {
  validateName();
}

reviewInput.onblur = function() {
  validateReview();
}

function validateName() {
  let nameInputValue = nameInput.value;

  if (nameInputValue.length === 0 || nameInputValue.length >= 20) {
    nameError.style.opacity = '1';
    return errors++;
  } else {
    nameError.style.opacity = '0';
  }
}

function validateReview() {
  let reviewInputValue = reviewInput.value;

  if (reviewInputValue.length === 0) {
    reviewError.style.opacity = '1';
    return errors++;
  } else {
    reviewError.style.opacity = '0';
  }
}

function validate(e) {
  errors = 0;

  validateName();
  validateReview();

  starsInput.value = starsCount+1;

    if (errors != 0 || starsCount == 0) {
    e.preventDefault();
    if (starsCount == null) {
      starsError.style.opacity = '1';
    }
  }
}

// stars

let starsCount = null;

for (let i = 0; i < stars.length; i++) {
  stars[i].addEventListener('mouseover', function() {
    starsCount = i;
    for (let x = 0; x <= i; x++) {
      stars[x].className = 'material-icons yellow ratingStar'
    };

    for (let k = starsCount+1; k < stars.length; k++) {
      stars[k].className = 'material-icons md-light ratingStar'
    };

    if (starsCount != null) {
      starsError.style.opacity = '0';
    }
  });
};


function closeWindow() {
  output.style.display="none";
}