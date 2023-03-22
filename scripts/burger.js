document.querySelector('.burger').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.header__navigation').classList.toggle('open');
  document.querySelector('.header__flexContainer').classList.toggle('full');
});