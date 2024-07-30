var btn = document.querySelector("#botao");
var input = document.querySelector("#email");


/**
 *    Evento irá analisar se o input está validado.
 Se estiver, chamará a função aparecer.
 */
btn.addEventListener("click", () => {
  if (input.validity.valid) {
    aparecer()
  } else {
    return;
  }
});


/*Essa função ira mostrar a tela de sucesso*/
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
/*Esse Evento fara a tela de sucesso desaparecer e resetar o valor do input*/
var btnSucess = document.querySelector("#btn-sucess");
btnSucess.addEventListener("click", () => {
  if (container.style.display == "none") {
    sucess.style.display = "none";
    container.style.display = "flex";
    window.location.reload()
  } else {
    return;
  }
});
