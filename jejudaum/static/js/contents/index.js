var imgs = document.querySelectorAll('.script_class_img');
var hander;
for(var i = 0 ; i < imgs.length; i++){
  imgs[i].addEventListener('mouseover', function(event){
    hander = this.nextSibling.nextSibling;
    hander.style.fontSize = "20px";
    event.stopPropagation();
  });

  imgs[i].addEventListener('mouseout', function(event){
    hander = this.nextSibling.nextSibling;
    hander.style.fontSize = "0px";
    event.stopPropagation();
  });
}
