var menu = document.getElementsByTagName("svg");
var navegacao = document.getElementById("nav");


function ativar() {  
  menu[3].style.display = "none";
  menu[4].style.display = "block";
  navegacao.style.display = "block";
}
 function desativar() {
   menu[3].style.display = "block";
   menu[4].style.display = "none";
   navegacao.style.display = "none";
}

//Elementos do botão de tema
var logo = document.querySelector(".reload")
var div_tema = document.querySelector('.div-tema')
var ball = document.querySelector(".ball")
//botoes que estão no header
var li_projeto = document.querySelector(".proje")
var li_about = document.querySelector(".about")
var li_btn = document.querySelector(".btn")
//titulos principais
var titulo_principal = document.querySelector(".titulo")
var paragrafo_titulo = document.querySelector(".paragrafo-titulo")
//campo onde mostros as tecnologias nominadas
var container_tecnologia = document.querySelector(".tecnologia")
// titulo dos projetos
var titulo_projeto = document.querySelector(".titulo-projetos")
//Logo Projetos(Terminal)
var background_logo_terminal = document.querySelector(".back")
//Footer
var footer = document.querySelector(".rodape")
var iniciar_projeto = document.querySelector(".job")
var btn_contato = document.querySelector(".btnContato")
var titulo_trabalho = iniciar_projeto.querySelector("h2")
var paragrafo_projeto = iniciar_projeto.querySelector("p")
//Container Projetos
var container_projetos = document.querySelector(".projetos")
var projetos = container_projetos.querySelectorAll(".item")
var sobreMim = document.querySelector(".mais")
//Nomes dos projetos
var nomesProjetos = document.querySelectorAll(".nameProject")


function tema() {
  ball.classList.toggle("active")
  if (ball.classList.contains("active")) {
    aplicarTema()
  } else {
    removerTema()
  }
}
function aplicarTema() {
  document.body.classList.add("backgorund_pagena")
  logo.classList.add("cor_branca")
  li_projeto.classList.add("cor_branca")
  li_about.classList.add("cor_branca")
  ball.style.backgroundColor = "white"
  div_tema.style.border = "solid 2px white"
  li_btn.classList.add("btn-active")
  titulo_principal.style.color = "black"
  paragrafo_titulo.style.color = "white"
  titulo_projeto.style.color = "white"
  container_tecnologia.classList.add("scarlete")
  container_tecnologia.querySelector("h2").style.color = "white"
  container_tecnologia.style.border = "Solid 2px white"
  container_tecnologia.style.boxShadow = ""
  container_tecnologia.style.boxShadow = "none"
  background_logo_terminal.style.border = "solid 2px white"

  projetos.forEach((indice) => {
    indice.style.boxShadow = "none"
    indice.style.border = "solid 2px white"
    indice.classList.add("scarlete")
    indice.querySelector("p").style.color = "white"
    indice.addEventListener("mouseenter", () => {
      indice.querySelector("p").classList.add("desaparecer")
    })
    indice.addEventListener("mouseout", () => {
      indice.querySelector("p").classList.remove("desaparecer")
    })
  })

  footer.style.backgroundColor = "darkslategrey"
  footer.querySelector(".job").style.backgroundColor = "inherit"
  footer.querySelector(".job").style.border = "solid 2px white"
  btn_contato.classList.add("btn-active")
}
function removerTema() {
  document.body.classList.remove("backgorund_pagena")
  logo.classList.remove("cor_branca")
  li_projeto.classList.remove("cor_branca")
  li_about.classList.remove("cor_branca")
  ball.style.backgroundColor = "black"
  div_tema.style.border = "solid 2px black"
  li_btn.classList.remove("btn-active")
  paragrafo_titulo.style.color = "black"
  titulo_principal.style.color = "rgb(10, 10, 85)"
  titulo_projeto.style.color = "black"
  container_tecnologia.classList.remove("scarlete")

  container_tecnologia.querySelector("h2").style.color = "black"
  container_tecnologia.style.border = ""
  container_tecnologia.style.boxShadow = "0.5px 0.5px 10px 0.1px grey"
  background_logo_terminal.style.border = ""

  projetos.forEach((indice) => {
    indice.style.boxShadow = "7px 7px 10px 1px grey"
    indice.style.border = "inherit"
    indice.querySelector("p").style.color = "rgb(39, 6, 185)"
    indice.classList.remove("scarlete")

    indice.addEventListener("mouseenter", () => {
      indice.querySelector("p").classList.add("desaparecer")
    })
    indice.addEventListener("mouseout", () => {
      indice.querySelector("p").classList.remove("desaparecer")
    })
  })
  footer.style.backgroundColor = "rgb(21, 21, 218)"
  footer.querySelector(".job").style.backgroundColor = "rgb(17, 17, 77)"
  footer.querySelector(".job").style.border = "inherit"
  btn_contato.classList.remove("btn-active")
}