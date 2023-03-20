"use strict"

const poloska = document.getElementById('partners__sliderPolosa');
let left = 0;

setInterval(() => {
  left -= 190;
  if (left < -2280) {
    left = 0;
  }

  poloska.style.left = left+'px';;
  }, 2500);