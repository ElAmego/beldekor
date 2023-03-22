"use strict"

const partnersSlider = document.getElementById('partners__sliderPolosa');
let partnerSliderLeft = 0;
let partnerSliderStep = -190;

setInterval(() => {
  partnerSliderLeft += partnerSliderStep;
  if (partnerSliderLeft < partnerSliderStep*12) {
    partnerSliderLeft = 0;
  }

  partnersSlider.style.left = partnerSliderLeft+'px';;
  }, 2500);