
var parent = document.querySelector('.info-box')
parent.addEventListener('mouseover', function(){
  parent.children[0].style.backgroundColor = 'black';
})
parent.addEventListener('mouseout', function(){
  parent.children[0].style.backgroundColor = 'white';
})