var menu = document.getElementsByTagName("svg");
var navegacao = document.getElementById("nav");
function ativar() {
  menu[1].style.display = "none";
  menu[2].style.display = "block";
  navegacao.style.display = "block";
}
function desativar() {
  menu[1].style.display = "block";
  menu[2].style.display = "none";
  navegacao.style.display = "none";
}

var divs = document.querySelectorAll(".item");
var paragrafos = document.querySelectorAll(".nameProject");



divs[0].addEventListener("mouseenter", () => {
  paragrafos[0].innerText = "";
});
divs[0].addEventListener("mouseout", () => {
  paragrafos[0].innerHTML = "Calculadora de Imc";
});

divs[1].addEventListener("mouseenter", () => {
  paragrafos[1].innerText = "";
});
divs[1].addEventListener("mouseout", () => {
  paragrafos[1].innerHTML = "Sign-up";
});


divs[2].addEventListener("mouseenter", () => {
  paragrafos[2].innerHTML = "";
});
divs[2].addEventListener("mouseout", () => {
  paragrafos[2].innerHTML = "Pagena de Vendas";
});
