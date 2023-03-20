"use strict"

const flexContainer = document.querySelector('.flexContainer');

// ----------------------------------------------------------------

const output = document.createElement('div');
output.className = 'output';

const outputFlex = document.createElement('div');
outputFlex.className = 'output__flex';

const outputArrowLeft = document.createElement('div');
outputArrowLeft.className = 'output__arrowLeft unselectable';

const outputArrowLeftContent = document.createElement('span');
outputArrowLeftContent.textContent = '<';

const outputImg = document.createElement('img');
outputImg.className = 'output__img';

const outputArrowRight = document.createElement('div');
outputArrowRight.className = 'output__arrowRight unselectable';

const outputArrowRightContent = document.createElement('span');
outputArrowRightContent.textContent = '>';

output.appendChild(outputFlex);
outputFlex.appendChild(outputArrowLeft);
outputArrowLeft.appendChild(outputArrowLeftContent);
outputFlex.appendChild(outputImg);
outputFlex.appendChild(outputArrowRight);
outputArrowRight.appendChild(outputArrowRightContent);

// ----------------------------------------------------------------

const header = document.getElementById('head');
const domPhotos = domAlbum.children;
const predpriyatiyePhotos = predpriyatiyeAlbum.children;
const budjetPhotos = budjetAlbum.children;

let photo = {
  number: null,
  albumType: '',

  render: function() {
    switch (this.albumType) {
      case 'ekrany_dom_photo': {
        outputImg.src = `img/photogallery/ekrany-dom-beldekor-${this.number}.jpg`;
        break;
      };

      case 'ekrany_predpriyatiye_photo': {
        outputImg.src = `img/photogallery/ekrany-predpriyatiya-beldekor-${this.number}.jpg`;
        break;
      };

      case 'ekrany_budjet_photo': {
        outputImg.src = `img/photogallery/ekrany-budjet-beldekor-${this.number}.jpg`;
        break;
      };
    }
  },


  left: function() {
    if (this.number <= 0) {
      switch (this.albumType) {
        case 'ekrany_dom_photo': {
          this.number = domPhotos.length;
          break;
        };

        case 'ekrany_predpriyatiye_photo': {
          this.number = predpriyatiyePhotos.length;
          break;
        };
  
        case 'ekrany_budjet_photo': {
          this.number = budjetPhotos.length;
          break;
        };
      };
    }

    this.number--;
    photo.render(); 
  },

  right: function() {
    switch (this.albumType) {
        case 'ekrany_dom_photo': {
          if (this.number >= domPhotos.length-1) this.number = -1;
          break;
        };

        case 'ekrany_predpriyatiye_photo': {
          if (this.number >= predpriyatiyePhotos.length-1) this.number = -1;
          break;
        };
  
        case 'ekrany_budjet_photo': {
          if (this.number >= budjetPhotos.length-1) this.number = -1;
          break;
        };
      };

    this.number++;
    photo.render(); 
  },
}

for (let i = 0; i < domPhotos.length; i++) {
  domPhotos[i].addEventListener('click', (e) => {
    photo.albumType = e.originalTarget.alt;
    photo.number = i;
    photo.render();
    flexContainer.insertBefore(output, header);
  });
};

for (let i = 0; i < predpriyatiyePhotos.length; i++) {
  predpriyatiyePhotos[i].addEventListener('click', (e) => {
    photo.albumType = e.originalTarget.alt;
    photo.number = i;
    photo.render();
    flexContainer.insertBefore(output, header);
  });
};

for (let i = 0; i < budjetPhotos.length; i++) {
  budjetPhotos[i].addEventListener('click', (e) => {
    photo.albumType = e.originalTarget.alt;
    photo.number = i;
    photo.render();
    flexContainer.insertBefore(output, header);
  });
};

outputArrowLeft.addEventListener('click', function() {
  photo.left();
});

outputArrowRight.addEventListener('click', function() {
  photo.right();
});

outputImg.addEventListener('click', function() {
  flexContainer.removeChild(output);
});