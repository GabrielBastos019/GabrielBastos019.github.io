var menu = document.getElementsByTagName('svg')
var navegacao  = document.getElementById('nav')
function ativar(){
  menu[1].style.display ='none'
  menu[2].style.display ='block' 
  navegacao.style.display ='block'
}
function desativar(){
  menu[1].style.display ='block'
  menu[2].style.display ='none'  
  navegacao.style.display ='none'
}