"use strict"

const addBtns = document.querySelectorAll('.photogallery__albumItem__btn');
const domAlbum = document.getElementById('photogallery__album__dom');
const predpriyatiyeAlbum = document.getElementById('photogallery__album__predpriyatiye');
const budjetAlbum = document.getElementById('photogallery__album__budjet');

for (let i = 0; i < addBtns.length; i++) {
  addBtns[i].addEventListener('click', () => {
    switch (i) {
      case 0: {
        domAlbum.style.display = 'flex';
        setTimeout(() => {
          domAlbum.style.opacity = '1';
        }, 100);

        setTimeout(() => {
          predpriyatiyeAlbum.style.display = 'none';  
          budjetAlbum.style.display = 'none';      
        }, 500);
        predpriyatiyeAlbum.style.opacity = '0';
        budjetAlbum.style.opacity = '0';

        break;
      };

      case 1: {
        predpriyatiyeAlbum.style.display = 'flex';
        setTimeout(() => {
          predpriyatiyeAlbum.style.opacity = '1';
        }, 100);

        setTimeout(() => {
          domAlbum.style.display = 'none';  
          budjetAlbum.style.display = 'none';      
        }, 500)
        domAlbum.style.opacity = '0';
        budjetAlbum.style.opacity = '0';

        break;
      };

      case 2: {
        budjetAlbum.style.display = 'flex';
        setTimeout(() => {
          budjetAlbum.style.opacity = '1';
        }, 100);

        setTimeout(() => {
          domAlbum.style.display = 'none';
          predpriyatiyeAlbum.style.display = 'none';     
        }, 500)
        domAlbum.style.opacity = '0';
        predpriyatiyeAlbum.style.opacity = '0';
        
        break;
      };      
    };
  });
};