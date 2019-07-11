const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');
let clicks = 0;
const toggleMenu = () => {
  switch (clicks === 0) {
    case true:
      clicks = 1;
      TweenMax.to('.menu', 1.5, { ease: Power1.easeOut, left: 0 });
      break;
    case false:
      clicks = 0;
      TweenMax.to('.menu', 1.5, { left: -350 });
      break;
  }
};
menuButton.addEventListener('click', () => toggleMenu());
const modal = document.getElementById('myModal');
const btn = document.querySelector('.addArticle');
const span = document.getElementsByClassName('close')[0];
btn.onclick = function() {
  modal.style.display = 'block';
};
span.onclick = function() {
  modal.style.display = 'none';
};
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
