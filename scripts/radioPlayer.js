// Variables

const radio = document.querySelector('.radio');
const radioCoverImg = document.querySelector('.radio-cover__img');
const radioHeader = document.querySelector('.radio-header__big');
const radioNavigation = document.querySelector('.radio-navigation');
const radioItem = document.querySelectorAll('.radio-item');
const radioStop = document.querySelector('.radio-stop');
const playerBtn = document.querySelectorAll('.player-btn');
const header = document.querySelector('.header');
const welcomeText = document.querySelector('.welcome');
const footer = document.querySelector('.footer-fix');

// Audio constructor

const audio = new Audio();
audio.type = 'audio/aac';

// Radio button was blocked

radioStop.disabled = true;

// Function for changing radio button icon and hidding header

const changeIconPlay = () => {
  if (audio.paused) {
    radio.classList.remove('play');
    radioStop.classList.add('fa-play');
    radioStop.classList.remove('fa-stop');
  } else {
    radio.classList.add('play');
    radioStop.classList.add('fa-stop');
    radioStop.classList.remove('fa-play');
  }
  $(function () {
    if ($(document).width() < 650) {
      $('.header').fadeOut(1500);
    } else {
      $('.header').fadeTo(1000, 0);
    }
  });
};
// Function for selecting items
const selectItem = (elem) => {
  radioItem.forEach((item) => item.classList.remove('select'));
  elem.classList.add('select');
};

// Event for playing radio stations

radioNavigation.addEventListener('change', (event) => {
  const target = event.target;
  const parrent = target.closest('.radio-item');
  selectItem(parrent);
  const title = parrent.querySelector('.radio-name').textContent; //Text inside parrent
  radioHeader.textContent = title;

  const urlImg = parrent.querySelector('.radio-img').src;
  radioCoverImg.src = urlImg;

  radioStop.disabled = false;
  audio.src = target.dataset.radioStantion;
  audio.play();
  changeIconPlay();
  //Background Change

  switch (radioHeader.textContent) {
    case 'RTL Groove':
      console.log('RTL Groove');
      document.body.style.background = 'rgb(207,199,199)';
      document.body.style.background =
        'radial-gradient(circle, rgba(207,199,199,1) 0%, rgba(99,19,19,1) 100%)';
      footer.style.background = 'black';
      footer.style.opacity = '0.8';
      break;
    case 'Energy':
      console.log('Energy');
      document.body.style.background = 'rgb(255,255,255)';
      document.body.style.background =
        'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(242,217,217,1) 100%)';
      footer.style.background = '#8b101b';
      footer.style.opacity = '0.8';
      break;
    case 'Record Rus':
      console.log('Record Rus');
      document.body.style.background = 'rgb(255,255,255)';
      document.body.style.background =
        'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 100%)';
      footer.style.background = '#2b2c2c';
      footer.style.opacity = '0.8';

      break;
    case 'Медляк FM':
      console.log('Медляк FM');
      document.body.style.background = 'rgb(249,249,249)';
      document.body.style.background =
        'radial-gradient(circle, rgba(249,249,249,1) 0%, rgba(148,32,156,1) 100%)';
      footer.style.background = '#8b101b';
      footer.style.opacity = '0.6';
      break;
    case 'Радио Пятница':
      console.log('Радио Пятница');
      document.body.style.background = 'rgb(246, 246, 246)';
      document.body.style.background =
        'radial-gradient(circle, rgba(246,246,246,1) 0%, rgba(240,83,30,1) 100%)';
      footer.style.background = '#8b101b';
      footer.style.opacity = '0.6';
      break;
    case 'Дорожное Радио':
      console.log('Дорожное Радио');
      document.body.style.background = 'rgb(249,249,249)';
      document.body.style.background =
        'radial-gradient(circle, rgba(249,249,249,1) 0%, rgba(247,255,111,1) 100%)';
      footer.style.background = '#8b101b';
      footer.style.opacity = '0.2';
      break;
    case '90-e':
      console.log('90-e');
      document.body.style.background = 'rgb(70,194,233)';
      document.body.style.background =
        'linear-gradient(90deg, rgba(70,194,233,1) 0%, rgba(255,249,111,1) 50%, rgba(222,69,252,1) 100%)';
      footer.style.background = '#8b101b';
      footer.style.opacity = '0.2';
      break;
    case 'Europa Plus':
      console.log('Europa Plus');
      document.body.style.background = 'rgb(255,255,255)';
      document.body.style.background =
        'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(211,234,255,1) 100%)';
      footer.style.background = '#b81b34';
      footer.style.opacity = '0.6';
      break;

    default:
      console.log('Standart background');
  }
});

//Event for stopping radio

radioStop.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  changeIconPlay();
});

//Animation

AOS.init();
