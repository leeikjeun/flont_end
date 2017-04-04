var side = document.getElementsByClassName('list-img').item(0);
var closeBtn = document.querySelector('.close-btn');
var content = document.getElementById('side_menu');
var overlay = document.querySelector('.overlay');

function toggleSideBar() {
  content.classList.toggle('on');
  overlay.classList.toggle('on');
}

side.addEventListener('click', toggleSideBar);
closeBtn.addEventListener('click', toggleSideBar);
overlay.addEventListener('click', toggleSideBar);
