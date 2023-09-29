var btn = document.querySelector("#botao");
var container = document.querySelector("#container");
var input = document.querySelector("#email");
var sucess = document.querySelector(".sucess");
var emailDigitado = document.querySelector("#emailDigitado");

btn.addEventListener("click", () => {
  if (input.validity.valid) {
    aparecer()
  } else {
    return;
  }
});

function aparecer() {
  var container = document.querySelector("#container");
  var input = document.querySelector("#email");
  var sucess = document.querySelector(".sucess");
  var emailDigitado = document.querySelector("#emailDigitado");
  container.style.display = "none";
  sucess.style.display = "flex";
  sucess.style.flexDirection = "column";
  emailDigitado.innerHTML = input.value;
  input.value = "";
  input.style.borderColor = "grey";
  input.style.backgroundColor = "white";
}

var btnSucess = document.querySelector("#btn-sucess");

btnSucess.addEventListener("click", () => {
  if (container.style.display == "none") {
    sucess.style.display = "none";
    container.style.display = "flex";
  } else {
    return;
  }
});
