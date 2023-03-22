"use strict"

const lastSlider = document.getElementById('last__sliderPolosa');
const breakpoints = document.querySelectorAll('.last__slider__breakpoint');
let lastSliderLeft = 0;
let lastSliderStep = -420;

function changeSizeLast(width) {
  if ((width >= 992 && width <= 1199) || (width >= 0 && width <= 767)) {
    lastSliderStep = -320;
  } else if (width >= 768 && width <= 991) {
    lastSliderStep = -220;
  }
}

changeSizeLast(window.innerWidth);

window.onresize = function() {
  changeSizeLast(window.innerWidth);
}

setInterval(() => {
  lastSliderLeft += lastSliderStep;

  if (lastSliderLeft < lastSliderStep*5) {
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

    case lastSliderStep*1: {
      breakpoints.forEach(element => {
        element.style.backgroundColor = '#FFFFFF';
      });
      breakpoints[1].style.backgroundColor = '#EF6500';
      break;
    };

    case lastSliderStep*2: {
      breakpoints.forEach(element => {
        element.style.backgroundColor = '#FFFFFF';
      });
      breakpoints[2].style.backgroundColor = '#EF6500';
      break;
    };

    case lastSliderStep*3: {
      breakpoints.forEach(element => {
        element.style.backgroundColor = '#FFFFFF';
      });
      breakpoints[3].style.backgroundColor = '#EF6500';
      break;
    };

    case lastSliderStep*4: {
      breakpoints.forEach(element => {
        element.style.backgroundColor = '#FFFFFF';
      });
      breakpoints[4].style.backgroundColor = '#EF6500';
      break;
    };

    case lastSliderStep*5: {
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
        lastSliderLeft = lastSliderStep*1;
        break;
      };

      case 2: {
        breakpoints.forEach(element => {
          element.style.backgroundColor = '#FFFFFF';
        });
        breakpoints[2].style.backgroundColor = '#EF6500';
        lastSliderLeft = lastSliderStep*2;
        break;
      };

      case 3: {
        breakpoints.forEach(element => {
          element.style.backgroundColor = '#FFFFFF';
        });
        breakpoints[3].style.backgroundColor = '#EF6500';
        lastSliderLeft = lastSliderStep*3;
        break;
      };

      case 4: {
        breakpoints.forEach(element => {
          element.style.backgroundColor = '#FFFFFF';
        });
        breakpoints[4].style.backgroundColor = '#EF6500';
        lastSliderLeft = lastSliderStep*4;
        break;
      };

      case 5: {
        breakpoints.forEach(element => {
          element.style.backgroundColor = '#FFFFFF';
        });
        breakpoints[5].style.backgroundColor = '#EF6500';
        lastSliderLeft = lastSliderStep*5;
        break;
      };
    };

    lastSlider.style.left = lastSliderLeft+'px';
  });
};