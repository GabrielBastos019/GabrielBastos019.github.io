var btn = document.querySelector(".botao").addEventListener("click", () => {
  var dia = document.querySelector("#dia").value;
  var mes = document.querySelector("#mes").value;
  var ano = document.querySelector("#ano").value;

  validarDia(dia);
  validarMes(mes);
  validarAno(ano);
  mostrar(dia, mes, ano);
});

function validarDia(dia) {
  var span = document.querySelectorAll("span");

  if (dia == "" || dia > 31) {
    span[1].innerHTML = "Dia invalido";
    document.querySelector("#dia").style.borderColor = "red";
  } else {
    span[1].style.display = "none";
    document.querySelector("#dia").style.borderColor = "grey";
  }
}

function validarMes(mes) {
  var span = document.querySelectorAll("span");

  if (mes == "" || mes > 12) {
    span[2].innerHTML = "Mês invalido";
    document.querySelector("#mes").style.borderColor = "red";
  } else {
    span[2].style.display = "none";
    document.querySelector("#mes").style.borderColor = "grey";
  }
}

function validarAno(ano) {
  var span = document.querySelectorAll("span");

  if (ano == "" || ano > 2023) {
    span[3].innerHTML = "Ano invalido";
    document.querySelector("#ano").style.borderColor = "red";
  } else {
    span[3].style.display = "none";
    document.querySelector("#ano").style.borderColor = "grey";
  }
}

function mostrar(dia, mes, ano) {
  var span = document.querySelectorAll(".value");

  if (dia <= 31 && dia > 0) {
    span[2].value = "";
    span[2].innerHTML = 31 - dia;
  } else {
    return;
  }

  if (mes <= 12 && mes > 0) {
    span[1].value = "";
    span[1].innerHTML = 12 - mes;
  } else {
    return;
  }

  if (ano <= 2023 && ano > 0) {
    span[0].value = "";
    span[0].innerHTML = 2023 - ano;
  }
}
