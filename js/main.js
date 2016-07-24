var link = document.querySelector('#show-map');
var popup = document.querySelector('.modal-content');
var close = document.querySelector('.auth-form__close');

link.addEventListener('click', function (event) {
  event.preventDefault();
  popup.classList.add('modal-content-show');
  window.scrollTo(0, 0);
});

close.addEventListener('click', function (event) {
  popup.classList.remove('modal-content-show');
});
