"use strict"

const lastSlider = document.getElementById('last__sliderPolosa');
const breakpoints = document.querySelectorAll('.last__slider__breakpoint');
let lastSliderLeft = 0

setInterval(() => {
  lastSliderLeft -= 420;

  if (lastSliderLeft < -2100) {
    lastSliderLeft = 0;
  }

  switch (lastSliderLeft) {
    case 0: {
      breakpoints.forEach(element => {
        element.style.backgroundColor = '#FFFFFF';
      });
      breakpoints[0].style.backgroundColor = '#EF6500';
      break;
    };

    case -420: {
      breakpoints.forEach(element => {
        element.style.backgroundColor = '#FFFFFF';
      });
      breakpoints[1].style.backgroundColor = '#EF6500';
      break;
    };

    case -840: {
      breakpoints.forEach(element => {
        element.style.backgroundColor = '#FFFFFF';
      });
      breakpoints[2].style.backgroundColor = '#EF6500';
      break;
    };

    case -1260: {
      breakpoints.forEach(element => {
        element.style.backgroundColor = '#FFFFFF';
      });
      breakpoints[3].style.backgroundColor = '#EF6500';
      break;
    };

    case -1680: {
      breakpoints.forEach(element => {
        element.style.backgroundColor = '#FFFFFF';
      });
      breakpoints[4].style.backgroundColor = '#EF6500';
      break;
    };

    case -2100: {
      breakpoints.forEach(element => {
        element.style.backgroundColor = '#FFFFFF';
      });
      breakpoints[5].style.backgroundColor = '#EF6500';
      break;
    };

  }

  lastSlider.style.left = lastSliderLeft+'px';
  }, 5000);

for (let i = 0; i < breakpoints.length; i++) {
  breakpoints[i].addEventListener('click', function() {
    switch (i) {
      case 0: {
        breakpoints.forEach(element => {
          element.style.backgroundColor = '#FFFFFF';
        });
        breakpoints[0].style.backgroundColor = '#EF6500';
        lastSliderLeft = 0;
        break;
      };

      case 1: {
        breakpoints.forEach(element => {
          element.style.backgroundColor = '#FFFFFF';
        });
        breakpoints[1].style.backgroundColor = '#EF6500';
        lastSliderLeft = -420;
        break;
      };

      case 2: {
        breakpoints.forEach(element => {
          element.style.backgroundColor = '#FFFFFF';
        });
        breakpoints[2].style.backgroundColor = '#EF6500';
        lastSliderLeft = -840;
        break;
      };

      case 3: {
        breakpoints.forEach(element => {
          element.style.backgroundColor = '#FFFFFF';
        });
        breakpoints[3].style.backgroundColor = '#EF6500';
        lastSliderLeft = -1260;
        break;
      };

      case 4: {
        breakpoints.forEach(element => {
          element.style.backgroundColor = '#FFFFFF';
        });
        breakpoints[4].style.backgroundColor = '#EF6500';
        lastSliderLeft = -1680;
        break;
      };

      case 5: {
        breakpoints.forEach(element => {
          element.style.backgroundColor = '#FFFFFF';
        });
        breakpoints[5].style.backgroundColor = '#EF6500';
        lastSliderLeft = -2100;
        break;
      };
    };

    lastSlider.style.left = lastSliderLeft+'px';
  });
};