"use strict"

const nameInput = document.querySelector('.feedback__name');
const nameError = document.querySelector('.feedback__nameError');

const emailInput = document.querySelector('.feedback__email');
const emailError = document.querySelector('.feedback__emailError');

const questionInput = document.querySelector('.feedback__question');
const questionError = document.querySelector('.feedback__questionError');

const btn = document.querySelector('.feedback__btn');

let errors = 0;

nameInput.onblur = function() {
  validateName();
};

emailInput.onblur = function() {
  validateEmail();
};

questionInput.onblur = function() {
  validateQuestion();
};

function validateName() {
  let nameInputValue = nameInput.value;

  if (nameInputValue.length !== 0 && /^[а-яА-Я]+$/.test(nameInputValue) && nameInputValue.length <= 20) {
    nameError.style.opacity = '0';
  } else {
    nameError.style.opacity = '1';
    return errors++;
  }
}

function validateEmail() {
  let emailInputValue = emailInput.value;

  if(emailInputValue.length !== 0 && /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/.test(emailInputValue)) {
    emailError.style.opacity = '0';
  } else {
    emailError.style.opacity = '1';
    return errors++;
  }
}

function validateQuestion() {
  let questionInputValue = questionInput.value;

  if(questionInputValue.length !== 0) {
    questionError.style.opacity = '0';
  } else {
    questionError.style.opacity = '1';
    return errors++;
  }
}

btn.onclick = function validate(e) {
  errors = 0;

  validateName();
  validateEmail();
  validateQuestion();

  if (errors != 0) {
    e.preventDefault();
  };
};