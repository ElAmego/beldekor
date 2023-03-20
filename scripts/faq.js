"use strict"

const question = document.querySelectorAll('.question__box');

question.forEach(element => {
  element.addEventListener('click', () => {
    if (getComputedStyle(element.parentNode.children[1]).display == 'none') {
      element.children[0].style.transform = 'rotate(90deg)';
      element.parentNode.children[1].style.display = 'block';
      setTimeout(() => {
        element.parentNode.children[1].style.opacity = '1';
    }, 100);
    } else {
      element.children[0].style.transform = 'rotate(0deg)';
      element.parentNode.children[1].style.opacity = '0';
      setTimeout(() => {
        element.parentNode.children[1].style.display = 'none';        
      }, 500);
    };
  })
});