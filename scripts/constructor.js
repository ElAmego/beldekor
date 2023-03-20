"use strict"
const flexContainer  = document.querySelector('.priceList__flexContainer');

const constructor = document.querySelector('.constructor');
const perforation = document.getElementById('constructor__perforation');
const ramka = document.querySelector('.constructor__ramka');

//--------------------------------------------------------------

const constructorItems = document.createElement('div');
constructorItems.className = 'constructor__modelItems';
constructor.appendChild(constructorItems);

const constructorRamkaTitle = document.createElement('p');
constructorRamkaTitle.className = 'constructor__title';
constructorRamkaTitle.textContent = 'Цвета рамки';
constructorItems.appendChild(constructorRamkaTitle);

const frameList = document.createElement('div');
frameList.className = 'constructor__frameList';
constructorItems.appendChild(frameList);

//-------------------------------------------------------------

const constructorRamkaTitle1 = document.createElement('p');
constructorRamkaTitle1.className = 'constructor__title';
constructorRamkaTitle1.textContent = 'Виды перфорации';
constructorItems.appendChild(constructorRamkaTitle1);

const perforationTypeList = document.createElement('div');
perforationTypeList.className = 'constructor__perforationTypeList';
constructorItems.appendChild(perforationTypeList);

//--------------------------------------------------------------

const constructorRamkaTitle2 = document.createElement('p');
constructorRamkaTitle2.className = 'constructor__title';
constructorRamkaTitle2.textContent = 'Цвета перфорации';
constructorItems.appendChild(constructorRamkaTitle2);

const perforationColorList = document.createElement('div');
perforationColorList.className = 'constructor__perforationColorList';
constructorItems.appendChild(perforationColorList);

//--------------------------------------------------------------

let cachedFrameColor = '';
let cachedPerforationType = '';
let cachedPerforationColor = '';

let screen = {
  frameColor: 'img/constructor/ramka_grusha.gif',
  perforationType: 'img/constructor/rotang.jpg',
  perforationColor: 'Клён',

  render: function() {
    ramka.setAttribute('src', this.frameColor);

    // Эфес
    if(this.perforationType === 'img/constructor/efes_klen.jpg') {
      switch (this.perforationColor) {
        case 'Бук': {
          perforation.style.backgroundImage = `url('img/constructor/efes_byk.jpg')`;
          break;
        }

        case 'Клён': {
          perforation.style.backgroundImage = `url('img/constructor/efes_klen.jpg')`;
          break;
        }

        case 'Металлик': {
          perforation.style.backgroundImage = `url('img/constructor/efes_metallik.jpg')`;
          break;
        }

        case 'Венге': {
          perforation.style.backgroundImage = `url('img/constructor/efes_oreh.jpg')`;
          break;
        }

        case 'Белый': {
          perforation.style.backgroundImage = `url('img/constructor/efes_white.jpg')`;
          break;
        }
      }
      
      // Дедало
    } else if (this.perforationType === 'img/constructor/gloria_klen.jpg') {
      switch (this.perforationColor) {
        case 'Бук': {
          perforation.style.backgroundImage = `url('img/constructor/gloria_byk.jpg')`;
          break;
        }

        case 'Клён': {
          perforation.style.backgroundImage = `url('img/constructor/gloria_klen.jpg')`;
          break;
        }

        case 'Металлик': {
          perforation.style.backgroundImage = `url('img/constructor/gloria_metallik.jpg')`;
          break;
        }

        case 'Венге': {
          perforation.style.backgroundImage = `url('img/constructor/gloria_oreh.jpg')`;
          break;
        }

        case 'Белый': {
          perforation.style.backgroundImage = `url('img/constructor/gloria_white.jpg')`;
          break;
        }
      }

      // Дамаско
    } else if (this.perforationType === 'img/constructor/veron_klen.jpg') {
      switch (this.perforationColor) {
        case 'Бук': {
          perforation.style.backgroundImage = `url('img/constructor/veron_byk.jpg')`;
          break;
        }

        case 'Клён': {
          perforation.style.backgroundImage = `url('img/constructor/veron_klen.jpg')`;
          break;
        }

        case 'Металлик': {
          perforation.style.backgroundImage = `url('img/constructor/veron_metallik.jpg')`;
          break;
        }

        case 'Венге': {
          perforation.style.backgroundImage = `url('img/constructor/veron_oreh.jpg')`;
          break;
        }

        case 'Белый': {
          perforation.style.backgroundImage = `url('img/constructor/veron_white.jpg')`;
          break;
        }
      }
    } else if (this.perforationType === 'img/constructor/rotang.jpg') perforation.style.backgroundImage = `url('img/constructor/rotang.jpg')`;
  }
}

const frameColors = [
  {id: 0, icon: 'img/constructor/color_ramka_antiksv.jpg', img: 'img/constructor/ramka_antiksv.gif', name:'Антик светлый'},
  {id: 1, icon: 'img/constructor/color_ramka_antiktemn.jpg', img: 'img/constructor/ramka_antiktemn.gif', name:'Антик темный'},
  {id: 2, icon: 'img/constructor/color_ramka_blue.jpg', img: 'img/constructor/ramka_blue.gif', name:'Голубой'},
  {id: 3, icon: 'img/constructor/color_ramka_buk.jpg', img: 'img/constructor/ramka_buk.gif', name:'Бук'},
  {id: 4, icon: 'img/constructor/color_ramka_dub.jpg', img: 'img/constructor/ramka_dub.gif', name:'Дуб'},
  {id: 5, icon: 'img/constructor/color_ramka_grusha.jpg', img: 'img/constructor/ramka_grusha.gif', name:'Груша'},
  {id: 6, icon: 'img/constructor/color_ramka_klen.jpg', img: 'img/constructor/ramka_klen.gif', name:'Дуб молочный'},
  {id: 7, icon: 'img/constructor/color_ramka_krderevo.jpg', img: 'img/constructor/ramka_krderevo.gif', name:'Красное дерево'},
  {id: 8, icon: 'img/constructor/color_ramka_mahagon.jpg', img: 'img/constructor/ramka_mahagon.gif', name:'Махагон'},
  {id: 9, icon: 'img/constructor/color_ramka_metall.jpg', img: 'img/constructor/ramka_metall.gif', name:'Металлик'},
  {id: 10, icon: 'img/constructor/color_ramka_oreh.jpg', img: 'img/constructor/ramka_oreh.gif', name:'Орех'},
  {id: 11, icon: 'img/constructor/color_ramka_red.jpg', img: 'img/constructor/ramka_red.gif', name:'Красный'},
  {id: 12, icon: 'img/constructor/color_ramka_rose.jpg', img: 'img/constructor/ramka_rose.gif', name:'Розовый'},
  {id: 13, icon: 'img/constructor/color_ramka_tik.jpg', img: 'img/constructor/ramka_tik.gif', name:'Тик'},
  {id: 14, icon: 'img/constructor/color_ramka_venge.jpg', img: 'img/constructor/ramka_venge.gif', name:'Венге'},
  {id: 15, icon: 'img/constructor/color_ramka_vishnya_sv.jpg', img: 'img/constructor/ramka_vishnya_sv.gif', name:'Вишня светлая'},
  {id: 16, icon: 'img/constructor/color_ramka_white.jpg', img: 'img/constructor/ramka_white.gif', name:'Белый'},
  {id: 17, icon: 'img/constructor/color_ramka_yablonya.jpg', img: 'img/constructor/ramka_yablonya.gif', name:'Яблоня'},
];

const perforationTypes = [
  {id: 0, icon: 'img/constructor/ekran_efes.jpg', img: 'img/constructor/efes_klen.jpg', name: 'Эфес'},
  {id: 1, icon: 'img/constructor/ekran_gloria.jpg', img: 'img/constructor/gloria_klen.jpg', name: 'Дедало'},
  {id: 2, icon: 'img/constructor/ekran_rotang.jpg', img: 'img/constructor/rotang.jpg', name: 'Ротанг'},
  {id: 3, icon: 'img/constructor/ekran_veron.jpg', img: 'img/constructor/veron_klen.jpg', name: 'Домаско'},
];

const perforationColors = [
  {id: 0, icon: 'img/constructor/color_ekran_byk.jpg', name:'Бук'},
  {id: 1, icon: 'img/constructor/color_ekran_klen.jpg', name:'Клён'},
  {id: 2, icon: 'img/constructor/color_ekran_metallik.jpg', name:'Металлик'},
  {id: 3, icon: 'img/constructor/color_ekran_oreh.jpg', name:'Венге'},
  {id: 4, icon: 'img/constructor/color_ekran_white.jpg', name:'Белый'},
]

frameColors.forEach(element => {
  const divFrame = document.createElement('div');
  divFrame.className = 'constructor__item';

  const imgFrame = document.createElement('img');
  imgFrame.setAttribute('src', element.icon);

  const spanFrame = document.createElement('span');
  spanFrame.textContent = element.name;

  frameList.appendChild(divFrame);
  divFrame.appendChild(imgFrame);
  divFrame.appendChild(spanFrame);

  imgFrame.addEventListener('click', (e) => {
    if (cachedFrameColor) {
      cachedFrameColor.style.border = 'none';
    };
    cachedFrameColor = spanFrame;
    cachedFrameColor.style.borderBottom = '2px solid #EF6500';

    screen.frameColor = element.img;
    screen.render();
  });
});

perforationTypes.forEach(element => {
  const divPerforationType = document.createElement('div');
  divPerforationType.className = 'constructor__item';

  const imgPerforationType = document.createElement('img');
  imgPerforationType.setAttribute('src', element.icon);

  const spanPerforationType = document.createElement('span');
  spanPerforationType.textContent = element.name;

  perforationTypeList.appendChild(divPerforationType);
  divPerforationType.appendChild(imgPerforationType);
  divPerforationType.appendChild(spanPerforationType);

  imgPerforationType.addEventListener('click', (e) => {
    if (cachedPerforationType) {
      cachedPerforationType.style.border = 'none';
    };
    cachedPerforationType = spanPerforationType;
    cachedPerforationType.style.borderBottom = '2px solid #EF6500';

    screen.perforationType = element.img;
    screen.render();
  });
});

perforationColors.forEach(element => {
  const divPerforationColor = document.createElement('div');
  divPerforationColor.className = 'constructor__item';

  const imgPerforationColor = document.createElement('img');
  imgPerforationColor.setAttribute('src', element.icon);

  const spanPerforationColor = document.createElement('span');
  spanPerforationColor.textContent = element.name;

  perforationColorList.appendChild(divPerforationColor);
  divPerforationColor.appendChild(imgPerforationColor);
  divPerforationColor.appendChild(spanPerforationColor);

  imgPerforationColor.addEventListener('click', (e) => {
    if (cachedPerforationColor) {
      cachedPerforationColor.style.border = 'none';
    };
    cachedPerforationColor = spanPerforationColor;
    cachedPerforationColor.style.borderBottom = '2px solid #EF6500';

    screen.perforationColor = element.name;
    screen.render();
  });
});