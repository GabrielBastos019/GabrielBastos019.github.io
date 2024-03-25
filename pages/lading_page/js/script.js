var lista = document.querySelectorAll("a , .item-lista");

lista[2].addEventListener("mouseenter", function () {
  lista[2].classList.add("back");

  lista[2].addEventListener("mouseleave", function () {
    lista[2].classList.remove("back");
  });
});
lista[4].addEventListener("mouseenter", function () {
  lista[4].classList.add("back");

  lista[4].addEventListener("mouseleave", function () {
    lista[4].classList.remove("back");
  });
});
lista[6].addEventListener("mouseenter", function () {
  lista[6].classList.add("back");

  lista[6].addEventListener("mouseleave", function () {
    lista[6].classList.remove("back");
  });
});

var menu = document.getElementsByTagName("svg");
var desativarMenu = document.querySelector("#sair");
var ul = document.getElementsByTagName("ul");

function ativar() {
  ul[0].style.display = "block";
  menu[0].style.display = "none";
  menu[1].style.display = "block";
}
function desativar() {
  ul[0].style.display = "none";
  menu[0].style.display = "block";
  menu[1].style.display = "none";
}
