var map_btn = document.querySelector('.map-btn');
var list_btn = document.querySelector('.list-btn');
var house_map = document.querySelector('.house-map');
var house_list = document.querySelector('.house-list');

function toggleBtn() {
  map_btn.classList.remove('on');
  list_btn.classList.remove('on');
  this.classList.toggle('on');
  showUplistOrMap(this);
}

function showUplistOrMap(btn){
  house_map.style.display = "none";
  house_list.style.display = "none";
  console.log(this);
  if(btn === map_btn){
    house_map.style.display = "block";
    initMap();
  }else if(btn === list_btn){
    house_list.style.display = "block";
  }
}

 map_btn.addEventListener('click', toggleBtn);
 list_btn.addEventListener('click', toggleBtn);

function initMap() {
// Create a map object and specify the DOM element for display.
var map = new google.maps.Map(document.querySelector('.house-map'), {
  center: {lat: 33.455306, lng: 126.561611},
  scrollwheel: false,
  zoom: 14
});
}
